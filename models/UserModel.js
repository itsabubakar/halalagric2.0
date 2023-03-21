const mongoose = require('mongoose')
// const { isEmail } = require('validator')
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
    },
    password: {
        required: true,
        type: String,
        minlength: [6, 'min length 6 char'],
    },
    name: {
        type: String,
    },
    phone: {
        type: String,
    },

})

const User = mongoose.model('user', userSchema)

module.exports = User