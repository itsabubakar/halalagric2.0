const mongoose = require('mongoose')


const orderSchema = mongoose.Schema({
    order: {
        required: true,
        type: []
    }
},
    {
        timestamps: true
    }
)

const Order = mongoose.model('Order', orderSchema)

module.exports = Order