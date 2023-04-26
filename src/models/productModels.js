const productsJson = require('../products.json')
const prisma = require('../databases')

const products = productsJson

const getAllProducts = () => {
    return products
}

module.exports = {
    getAllProducts,
    products
}