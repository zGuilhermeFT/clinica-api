const express = require('express')
const router = express.Router()
const userController = require('./controllers/userController')

router.get('/users', userController.get)
router.post('/users', userController.store)

module.exports = router
