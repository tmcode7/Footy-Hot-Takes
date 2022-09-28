const express = require('express')
const router = express.Router()
const takesController = require('../controllers/takes')

router.get('/', takesController.getTakes)

router.post('/createTakes', takesController.addTake)

module.exports = router