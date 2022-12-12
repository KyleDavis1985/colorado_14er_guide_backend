const router = require('express').Router()
const controller = require('../controllers/MountainController')

router.get('/', controller.GetMountains)
router.get('/cl/:mountainId', controller.GetMountainChecklist)
router.get('/cl', controller.GetMountainsChecklist)

module.exports = router
