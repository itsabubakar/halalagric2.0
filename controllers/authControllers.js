const User = require('../models/UserModel')
const bcyrpt = require('bcrypt')
const jwt = require('jsonwebtoken')

// handle errs
function handleErrors(err) {
    let errors = { email: '', password: '' }

    // duplicate err code
    if (err.code === 11000) {
        errors.email = 'email exists'
        return errors
    }

    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message
        })
    }

    return errors
}

const maxAge = 24 * 60 * 60
function createToken(id) {
    return jwt.sign({ id }, 'jwtsecretkey', {
        expiresIn: maxAge
    })
}

async function signup(req, res) {
    const { email, pwd } = req.body
    let password = pwd
    const isEmail = await User.findOne({ email })

    if (isEmail) {
        console.log(isEmail)
        return res.status(400).json('email exists')
    }

    const salt = await bcyrpt.genSalt(10)
    const hashPwd = await bcyrpt.hash(password, salt)

    try {
        let password = hashPwd
        const user = await User.create({ email, password })
        const userId = user._id
        const token = createToken(user._id)
        res.status(201).json({ email, token, userId })
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}

// google sign up
async function gSignup(req, res) {
    console.log('hit')
    const { email, name, url } = req.body

    const user = await User.findOne({ email })

    if (user) {
        const token = createToken(user._id)
        const userId = user._id
        return res.status(201).json({ email, token, userId, url })
    }
    else {
        try {
            const user = await User.create({ email, name, url })
            const userId = user._id
            const token = createToken(user._id)
            res.status(201).json({ email, token, userId, url })
        } catch (error) {
            const errors = handleErrors(error)
            console.log(errors)
            res.status(400).json(errors)
        }
    }
}

async function login(req, res) {
    const { email, pwd } = req.body
    let password = pwd
    const user = await User.findOne({ email })

    if (user) {
        const auth = await bcyrpt.compare(password, user.password)
        if (auth) {
            const token = createToken(user._id)
            const userId = user._id
            return res.status(201).json({ email, token, userId })
        }
        return res.status(400).json('password or email incorrect')
    }
}

async function updateUser(req, res) {
    const { name, bio, phone, _id, url } = req.body
    const user = await User.findOne({ _id })
    if (user) {
        user.name = name
        user.bio = bio
        user.phone = phone
        user.url = url
        await user.save()
        console.log(user)
        return res.status(200).json({ name, bio, phone })
    }
    return res.status(400).json('Unable to save info to db')
}

async function findUser(req, res) {
    const { id } = req.body
    const _id = id

    const user = await User.findOne({ _id })
    console.log(user)
    if (user) {
        return res.status(200).json({ user })
    }
    return res.status(200).json('unable to find user')
}

module.exports = {
    signup,
    login,
    findUser,
    updateUser,
    gSignup
}