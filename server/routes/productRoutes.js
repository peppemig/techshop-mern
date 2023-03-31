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

productRoutes.route('/').get(getProducts);

export default productRoutes;