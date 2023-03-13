const mongoose = require('mongoose')


const orderSchema = mongoose.Schema({
    cart: {
        required: true,
        type: []
    },
    price: {
        required: true,
        type: Number
    },
    transactionId: {
        required: true,
        type: String
    },
    phone: {
        type: String
    },
    address: {
        type: String
    },
    email: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
},
    {
        timestamps: true
    }
)

// phone, email, address, firstName, lastName

const Order = mongoose.model('Order', orderSchema)

module.exports = Order