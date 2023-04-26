const Router = require('express')
const productsController = require('../controllers/productsController')
const router = new Router()

router.get('/api/products', productsController.getAllProductsController)
router.get('/api/products/:id', productsController.getIdProducts)
router.post('/api/products', productsController.createProduct)
router.delete('/api/products/:id', productsController.removeProduct)

module.exports = router