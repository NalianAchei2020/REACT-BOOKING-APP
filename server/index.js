import express from "express";
import mongoose from 'mongoose';
import bodyParser from "body-parser";
import cors from 'cors';
import config from "./config.js";
import  hotelRouter from './Routes/hotels.js'
import roomsRouter from './Routes/rooms.js';
import  usersRouter from './Routes/users.js';
import authRouter from './Routes/auth.js';

const app = express();


mongoose.connect(config.MONGODB_URL, {
    useNewUrlParser:true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Connected to mongoDB")
}).catch((error)=>{
    console.log(error.reason);
})
//middleware
app.use(cors())
app.use(bodyParser.json())
app.use(express.json());

//api routes
app.use('/api/hotels', hotelRouter);
app.use('/api/users', usersRouter)
app.use('/api/rooms', roomsRouter)
app.use('/api/auth',authRouter)

//error middleware handler
app.use((err, req, res, next)=>{
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong"
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message: errorMessage,
        stack: err.stack
    });
})

app.listen(2000, ()=>{
    console.log("connected to port 2000");
})