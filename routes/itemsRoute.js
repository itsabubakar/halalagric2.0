const express = require('express')
const { getAllItems } = require('../controllers/itemControllers')
const router = express.Router()

router.get('/', getAllItems)

module.exports = router