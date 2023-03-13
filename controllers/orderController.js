const Order = require('../models/OrderModel')


const postOrder = async (req, res) => {
    const { cart, price, transactionId, phone, email, address, firstName, lastName } = req.body
    try {
        const order = await Order.create({ cart, price, transactionId, phone, email, address, firstName, lastName })
        return res.status(200).json(order)
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    postOrder
}