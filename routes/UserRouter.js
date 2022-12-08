const router = require('express').Router()
const controller = require('../controllers/UserController')

router.get('/', controller.GetUsers)
router.get('/:userId', controller.GetUser)
router.get('/cl/:userId', controller.GetUserChecklist)
router.post('/create', controller.CreateUser)
router.put('/:userId', controller.UpdateUser)
router.delete('/:userId', controller.DeleteUser)

module.exports = router
