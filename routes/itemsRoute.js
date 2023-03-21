const express = require('express')
const { getAllItems, getOneItems, searchItems } = require('../controllers/itemControllers')
const router = express.Router()

router.get('/', getAllItems)
router.get('/oneitem', getOneItems)
router.get('/search', searchItems)

module.exports = router