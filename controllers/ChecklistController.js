const { User } = require('../models')
const { Mountain } = require('../models')

const GetUserIncludingMountains = async (req, res) => {
  try {
    const users = await User.findAll({
      include: [{ model: Comment, as: 'mountains' }]
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

module.exports = {
  GetMountainsIncludingUser,
  GetUserIncludingMountains
}
