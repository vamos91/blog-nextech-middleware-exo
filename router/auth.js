const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')

router.post('/signin', 
//todo...
authController.signin)

router.post('/signup', 
//todo...
authController.signup)

module.exports = router