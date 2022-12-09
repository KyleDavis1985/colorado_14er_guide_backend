const { Mountain } = require('../models')

const GetMountains = async (req, res) => {
  try {
    const mountains = await Mountain.findAll()
    res.send(mountains)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  GetMountains
}
