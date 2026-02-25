import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import authRoutes from './routes/auth.js'
import cors from 'cors'
dotenv.config()
connectDB()
const app = express()

const Port = process.env.PORT || 5000
app.use(cors())
app.use(express.json());
app.use("/api/auth",authRoutes)

app.listen(Port,()=>{
    console.log('server is running on port ',Port)
})
