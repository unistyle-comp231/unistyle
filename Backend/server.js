import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import path from 'path'
import { fileURLToPath } from 'url'

import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'

// App Config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// middlewares
app.use(express.json())
app.use(cors())

// api endpoints
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)

// ----- SERVE FRONTEND (IMPORTANT PART) -----
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const frontendPath = path.join(__dirname, 'frontend', 'dist')

app.use(express.static(frontendPath))

// SPA catch-all: for any non-API route, send index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'))
})
// -------------------------------------------

app.listen(port, () => console.log('Server started on PORT : ' + port))