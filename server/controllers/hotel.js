//This file is for authentication
import Hotel from '../models/hotelsModel.js';

//create
export const createHotel = async(req, res, next)=>{
    const hotel = new Hotel(req.body);
    try{
const createHotel = await hotel.save();
res.status(200).json(createHotel);
   }
   catch(err){
    next(err);
   } 
}
//update
export const updateHotel = async(req, res, next)=>{
    try{
        const updateHotel = await Hotel.findByIdAndUpdate(req.params.id, {
           $set: req.body}, {new:true});
        res.status(200).json(updateHotel);
           }
           catch(err){
            next(err);
           } 
}
//delete
export const deleteHotel = async(req, res, next)=>{
    try{
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel has been deleted");
          }
          catch(err){
           next(err);
          } 
}
//get
export const getHotel = async(req, res, next)=>{
    try{
        const getHotel = await Hotel.findById(req.params.id);
        res.status(200).json(getHotel);
          }
          catch(err){
           next(err);
          }   
}

//get all
export const getallHotels = async(req, res, next)=>{
    try{
        const getalllHotel = await Hotel.find();
        res.status(200).json(getalllHotel);
          }
          catch(err){
           next(err);
}
}
