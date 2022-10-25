const express = require('express')
const router = express.Router()
const takesController = require('../controllers/takes')
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth,  takesController.getTakes)

router.post('/createTakes', takesController.addTake)

router.delete('/deleteTakes', takesController.deleteTake)

router.put('/likeTake', takesController.likeTake)

router.put('/dislikeTake', takesController.dislikeTake)

module.exports = router