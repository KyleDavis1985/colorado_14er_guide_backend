const { User } = require('../models')
const { Mountain } = require('../models')
const { Checklist } = require('../models')
const checklist = require('../models/checklist')

const GetUsersIncludingMountains = async (req, res) => {
  try {
    const users = await User.findAll({
      include: [{ model: Mountain, as: 'mountains' }]
    })
    res.send(users)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const GetMountainsIncludingUser = async (req, res) => {
  try {
    const mountain = await Mountain.findAll({
      include: [{ model: User, as: 'users' }]
    })
    res.send(mountain)
  } catch (error) {
    throw error
  }
}

const CreateChecklist = async (req, res) => {
  try {
    const checklist = await Checklist.create(req.body)
    res.send(checklist)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const GetUserWithMountains = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { id: req.params.userId },
      include: [{ model: Mountain, as: 'user_mountain' }]
    })
    res.send(user)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  GetMountainsIncludingUser,
  GetUsersIncludingMountains,
  CreateChecklist,
  GetUserWithMountains
}
