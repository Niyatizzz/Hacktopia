import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'

//env config
dotenv.config()

//express app server
const app = express()

//mongodb connect
connectDB()

//middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//routes working
app.get("/", (req, res) => {
  res.send("API is working");
});

//port
const PORT = process.env.PORT || 5000
//launch and listen
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})

