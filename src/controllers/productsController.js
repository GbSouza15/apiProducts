const express = require('express')
const { getAllProducts } = require('../models/productModels')

const getAllProductsController = (request, response) => {
    const products = getAllProducts()
    response.json(products)
}

const getIdProducts = (request, response) => {
    const id = Number(request.params.id)
    const products = getAllProducts()
    const product = products.find(product => product.id === id)

    product ? response.json(product) : response.status(404).json({ 'error': 'product not found' })
}

module.exports = {
    getAllProductsController, 
    getIdProducts
}