const router = require('express').Router()
const controller = require('../controllers/MountainController')

router.get('/', controller.GetMountains)

module.exports = router
