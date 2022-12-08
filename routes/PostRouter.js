const router = require('express').Router()
const controller = require('../controllers/PostController')

router.get('/', controller.GetPosts)
router.get('/:postId', controller.GetPost)
router.post('/create', controller.CreatePost)
router.put('/:postId', controller.UpdatePost)
router.delete('/:postId', controller.DeletePost)

module.exports = router
