const router = require('express').Router()
const controller = require('../controllers/ChecklistController')

router.get('/user', controller.GetUsersIncludingMountains)
router.get('/mountain/:mountain_id', controller.GetMountainsIncludingUser)
router.post('/create', controller.CreateChecklist)
router.get('/:user_Id', controller.GetUserWithMountains)

module.exports = router
