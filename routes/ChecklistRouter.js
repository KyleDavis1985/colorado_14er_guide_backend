const router = require('express').Router()
const controller = require('../controllers/ChecklistController')

router.get('/:user_id', controller.GetUserIncludingMountains)
router.get('/:mountain_id', controller.GetMountainsIncludingUser)
