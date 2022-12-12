const router = require('express').Router()
const controller = require('../controllers/UserController')

router.get('/', controller.GetUsers)
router.get('/:userId', controller.GetUser)
router.get('/post/:userId', controller.GetUserPosts)
router.post('/create', controller.CreateUser)
router.put('/:userId', controller.UpdateUser)
router.delete('/:userId', controller.DeleteUser)

module.exports = router
