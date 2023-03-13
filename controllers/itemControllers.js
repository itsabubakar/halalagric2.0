const Item = require('../models/itemModel')

const getAllItems = async (req, res) => {
    const items = await Item.find().lean()
    if (!items.length) {
        return res.status(400).json({ message: 'No item found' })
    }
    return res.status(200).json(items)
}

const getOneItems = async (req, res) => {
    const { itemId } = req.query
    try {
        const item = await Item.findOne({ _id: itemId })
        return res.status(200).json(item)

    } catch (error) {
        return res.status(400).json({ message: 'No item found' })

    }
}

module.exports = {
    getAllItems,
    getOneItems
}