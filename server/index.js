import express from "express";
import mongoose from 'mongoose';
import bodyParser from "body-parser";
import cors from 'cors';
import cookieParser from "cookie-parser";
import config from "./config.js";
import  hotelRouter from './Routes/hotels.js'
import roomsRouter from './Routes/rooms.js';
import  usersRouter from './Routes/users.js';
import authRouter from './Routes/auth.js';

const app = express();

mongoose.set("strictQuery", false);

mongoose.connect(config.MONGODB_URL, ()=>{
    console.log("connected to database");
}).catch(err =>{
    console.log(err)
})
//middleware
app.use(cors())
app.use(bodyParser.json())
app.use(express.json());

//cookie
app.use(cookieParser())
app.post('/', (res, req)=>{
    res.send("Hi there");
})
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

app.listen(20000, ()=>{
    console.log("connected to port 20000");
})