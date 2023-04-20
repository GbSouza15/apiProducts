const express = require('express')
const { getAllProducts } = require('../models/productModels')

const getAllProductsController = (request, response) => {
    const products = getAllProducts()
    response.json(products)
}

module.exports = {
    getAllProductsController
}