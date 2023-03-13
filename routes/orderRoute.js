const express = require('express')
const { postOrder } = require('../controllers/orderController')
const router = express.Router()

router.post('/', postOrder)

module.exports = router