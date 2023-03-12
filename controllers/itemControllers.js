const Item = require('../models/itemModel')

const getAllItems = async (req, res) => {
    console.log('hit!!')
    const items = await Item.find().lean()
    if (!items.length) {
        return res.status(400).json({ message: 'No images found' })
    }
    console.log(items)
    return res.status(200).json(items)
}

module.exports = {
    getAllItems
}