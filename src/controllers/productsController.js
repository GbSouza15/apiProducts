const prisma = require('../databases')

const getAllProductsController = async (req, res) => {
    const products = await prisma.product.findMany()
    return res.status(200).json(products)
}

const getIdProducts = async (req, res) => {
    const id = Number(req.params.id)
    const product = await prisma.product.findUnique({
        where: {
            id
        }
    })

    product ? res.json(product) : res.status(404).json({ 'error': 'product not found' })
}

const createProduct = async (req, res) => {
    const { body } = req
    const product = await prisma.product.create({
        data: {
            ...body
        }
    })
    return res.status(201).json(product)
}

const removeProduct = async (req, res) => {
    const { id } = req.params
    await prisma.product.delete({
        where: {
            id : Number(id) 
        }
    })
    return res.status(203).json()
}

module.exports = {
    getAllProductsController, 
    getIdProducts,
    createProduct,
    removeProduct
}