const express = require('express')
const router = express.Router()
const homeController = require('./Controllers/HomeController')

router.route('/').get(homeController.get)
router.route('')

module.exports = router

