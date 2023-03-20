const express = require('express')
const router = express.Router()


const {
    signup, login, findUser, updateUser, gSignup
} = require('../controllers/authControllers')


router.route('/google').post(gSignup)
router.route('/signup').post(signup)
router.route('/login').post(login)
router.route('/userdetail').post(findUser)
router.route('/updateuser').post(updateUser)

module.exports = router
