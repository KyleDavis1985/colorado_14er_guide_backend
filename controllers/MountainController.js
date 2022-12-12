const { Mountain } = require('../models')
const { Checklist } = require('../models')

const GetMountains = async (req, res) => {
  try {
    const mountains = await Mountain.findAll()
    res.send(mountains)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const GetMountainChecklist = async (req, res) => {
  try {
    const mountaincl = await Mountain.findOne({
      where: { id: req.params.mountainId },
      include: [{ model: Checklist, as: 'mountain_cl' }]
    })
    res.send(mountaincl)
  } catch (error) {
    throw error
  }
}

const GetMountainsChecklist = async (req, res) => {
  try {
    const mountaincl = await Mountain.findAll({
      include: [{ model: Checklist, as: 'mountain_cl' }]
    })
    res.send(mountaincl)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetMountains,
  GetMountainChecklist,
  GetMountainsChecklist
}
