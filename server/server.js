import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'

import authRoute from "./routes/authRoute.js";
import userRoute from "./routes/userRoute.js";
import chatRoute from "./routes/chatRoute.js";
import codeRoute from "./routes/codeRoute.js";
import submissionRoute from "./routes/submissionRoute.js";

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

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/chat", chatRoute);
app.use("/api/code", codeRoute);
app.use("/api/submissions", submissionRoute);

//port
const PORT = process.env.PORT || 5000
//launch and listen
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})

