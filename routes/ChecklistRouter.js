const router = require('express').Router()
const controller = require('../controllers/ChecklistController')

router.get('/user', controller.GetUsersIncludingMountains)
router.get('/mountain', controller.GetMountainsIncludingUser)
router.post('/create', controller.CreateChecklist)
router.get('/:userId', controller.GetUserWithMountains)
router.delete('/:mountainId', controller.DeleteChecklist)

module.exports = router
