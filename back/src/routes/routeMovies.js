const express = require('express')
const moviesController = require('../controllers/moviesControllers.js')

const router = express.Router()

router.get('/movie', moviesController)

module.exports = router