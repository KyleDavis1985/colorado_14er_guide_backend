const router = require('express').Router()
const controller = require('../controllers/ChecklistController')

router.get('/user', controller.GetUsersIncludingMountains)
router.get('/mountain', controller.GetMountainsIncludingUser)
router.post('/create', controller.CreateChecklist)
router.get('/:userId', controller.GetUserWithMountains)

module.exports = router
