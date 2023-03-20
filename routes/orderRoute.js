const express = require('express')
const router = express.Router()
const { postOrder } = require('../controllers/orderController')

router.post('/', postOrder)

module.exports = router