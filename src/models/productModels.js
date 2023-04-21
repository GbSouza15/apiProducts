const productsJson = require('../products.json')

const products = productsJson

const getAllProducts = () => {
    return products
}

module.exports = {
    getAllProducts
}