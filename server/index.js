import dotenv from 'dotenv'
import connectToDatabase from './database.js'
import express from 'express'
import productRoutes from './routes/productRoutes.js';
import cors from 'cors'

dotenv.config();
connectToDatabase();
const app = express()

app.use(cors())
app.use(express.json())

const port = process.env.PORT || 5000

app.use('/api/products', productRoutes)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})