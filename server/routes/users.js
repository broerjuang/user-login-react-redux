const express = require('express')
const router = express.Router()
const controller = require('../controllers/user.controller')

// GET all users
router.get('/users', controller.list)

// POST a new user
router.post('/users', controller.create)

module.exports = router;
