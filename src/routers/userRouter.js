const express = require('express')
const router = express.Router()
const productsController = require('../controllers/productsController')

router.get('/api/products', productsController.getAllProductsController)
router.get('/api/products/:id', productsController.getIdProducts)

module.exports = router