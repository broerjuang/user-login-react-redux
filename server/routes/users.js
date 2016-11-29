const express = require('express')
const router = express.Router()
const controller = require('../controllers/user.controller')
const passport = require('passport')
const jwt = require('jsonwebtoken')

const UserModel = require('../models/user.model')

// GET all users
router.get('/users', controller.list)

// POST a new user
// router.post('/users', controller.create)

router.post('/users/', (req, res) => {
    UserModel.register(new UserModel({
        username: req.body.username,
        email: req.body.email,
    }), req.body.password, (err, data) => {
        if(err) {
            // console.log(err)
            res.json(err)
        } else {
            res.status(200).json({ token: jwt.sign({
                                user_id: data._id,
                                username: data.username,
                                email: data.email
                            }, 'bebas')
                        })
        }
    })
});



router.post('/login', function (req, res, next) { 
    passport.authenticate('local',  {

    }, (err, user) => {
        console.log(user)
        if(err) return res.json(err)
        else if (!user) return res.status(400).json('no user found')
        else {
            return res.status(200).json({ token: jwt.sign({
                                user_id: data._id,
                                username: data.username,
                                email: data.email
                            }, 'bebas')
                        })(req, res, next)
                    }
    })
});

module.exports = router;
