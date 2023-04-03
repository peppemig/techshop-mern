import dotenv from 'dotenv'
import connectToDatabase from './database.js'
import express from 'express'
import productRoutes from './routes/productRoutes.js';
import cors from 'cors'
import mongoose from "mongoose"

const app = express()
dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to mongoDB')
    } catch (err) {
        throw err;
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!")
})

// middlewares
app.use(cors())
app.use(express.json())

app.use("/api/products", productRoutes)

app.listen((process.env.PORT), ()=>{
    connect();
    console.log('Listening...');
})