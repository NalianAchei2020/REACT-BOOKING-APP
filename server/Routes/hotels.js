import express  from "express";
import { createHotel, deleteHotel, getallHotels, getHotel, updateHotel } from "../controllers/hotel.js";


const hotelRouter = express.Router();

//create
hotelRouter.post('/', createHotel)
//update
hotelRouter.put('/:id',updateHotel)
//delete
hotelRouter.delete('/:id', deleteHotel)
//get
hotelRouter.get('/:id', getHotel)
//get all
hotelRouter.get('/',getallHotels)

export default hotelRouter;