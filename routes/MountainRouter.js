const router = require('express').Router()
const controller = require('../controllers/MountainController')

router.get('/', controller.GetMountains)
router.get('/cl/:mountainId', controller.GetMountainChecklist)

module.exports = router
