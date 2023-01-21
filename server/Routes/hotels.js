import express  from "express";
import { createHotel, deleteHotel, getallHotels, getHotel, updateHotel } from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";


const hotelRouter = express.Router();

//create
hotelRouter.post('/', verifyAdmin, createHotel)
//update
hotelRouter.put('/:id', verifyAdmin ,updateHotel)
//delete
hotelRouter.delete('/:id', verifyAdmin, deleteHotel)
//get
hotelRouter.get('/:id', getHotel)
//get all
hotelRouter.get('/',getallHotels)

export default hotelRouter;