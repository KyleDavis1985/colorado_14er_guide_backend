const Router = require('express').Router()
const PostRouter = require('./PostRouter')
const UserRouter = require('./UserRouter')
const AuthRouter = require('./AuthRouter')
Router.use('/auth', AuthRouter)
Router.use('/post', PostRouter)
Router.use('/user', UserRouter)
module.exports = Router
