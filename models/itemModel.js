const mongoose = require('mongoose')


const itemSchema = mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: Number
    },
    desc: {
        type: String
    },
    category: {
        required: true,
        type: String
    }
},
    {
        timestamps: true
    }
)

const Item = mongoose.model('Item', itemSchema)

module.exports = Item