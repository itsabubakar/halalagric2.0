const express = require('express')
const { getAllItems, getOneItems } = require('../controllers/itemControllers')
const router = express.Router()

router.get('/', getAllItems)
router.get('/oneitem', getOneItems)

module.exports = router