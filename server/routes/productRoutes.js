import express from 'express'
import Product from '../models/Product.js'
const productRoutes = express.Router()

const getProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        res.json(products)
    } catch (error) {
        console.log(`Error: ${error.message}`)
    }
}

const getProduct = async (req, res) => {
    const product = await Product.findById(req.params.id)

    if(product) {
        res.json(product)
    } else {
        res.status(404)
        throw new Error ('Product not found')
    }
}

const getProductsByBrand = async (req, res) => {
    try {
        const productsByBrand = await Product.find({brand: req.params.brandName})
        res.json(productsByBrand)
    } catch (error) {
        console.log(`Error: ${error.message}`)
    }
}

const getProductsByPrice = async (req, res) => {
    try {
        if(req.params.price === ''){
            const productsByPrice = await Product.find({})
            res.json(productsByPrice)
        }else{
            const productsByPrice = await Product.find({price: {$lte: req.params.price}})
            res.json(productsByPrice)
        }
    } catch (error) {
        console.log(`Error: ${error.message}`)
    }
}

productRoutes.route('/').get(getProducts);
productRoutes.route('/:id').get(getProduct)
productRoutes.route('/brand/:brandName').get(getProductsByBrand)
productRoutes.route('/price/:price').get(getProductsByPrice)

export default productRoutes;