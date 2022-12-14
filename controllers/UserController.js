const { User } = require('../models')
const { Checklist } = require('../models')
const { Post } = require('../models')

const GetUsers = async (req, res) => {
  try {
    const users = await User.findAll()
    res.send(users)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const GetUser = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.userId
      }
    })
    res.send(user)
  } catch (error) {
    throw error
  }
}

const GetUserPosts = async (req, res) => {
  try {
    const userposts = await User.findOne({
      where: { id: req.params.userId },
      include: [{ model: Post, as: 'user_posts' }]
    })
    res.send(userposts)
  } catch (error) {
    throw error
  }
}

const CreateUser = async (req, res) => {
  try {
    const user = await User.create({ ...req.body })
    res.send(user)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const UpdateUser = async (req, res) => {
  try {
    const user = await User.update(
      { ...req.body },
      { where: { id: req.params.userId }, returning: true }
    )
    res.send(user)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const DeleteUser = async (req, res) => {
  try {
    await User.destroy({ where: { id: req.params.userId } })
    res.send({ msg: 'User Deleted', payload: req.params.userId, status: 'Ok' })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  GetUsers,
  GetUser,
  CreateUser,
  UpdateUser,
  DeleteUser,
  GetUserPosts
}
