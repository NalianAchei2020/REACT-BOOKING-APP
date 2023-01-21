import Room from "../models/roomsModel.js";
import Hotel from '../models/roomsModel.js';



export const createRoom = async(res, req, next)=>{
    const hotelId = req.params.hotelid;
    const newRoom = new Room(req.body);
    try{
   const savedRoom = await newRoom.save();
   try{
    await Hotel.findByIdAndUpdate(hotelId, {
        $push: {rooms: savedRoom._id}
    })
   } catch(err){
     next(err)
   }
   res.status(200).json(savedRoom);
    }catch(err){
     next(err)
    }
}

export const updateRooms = async(req, res, next)=>{
    try{
        const updateRoom = await Room.findByIdAndUpdate(req.params.id, {
           $set: req.body}, {new:true});
        res.status(200).json(updateRoom);
           }
           catch(err){
            next(err);
           } 
}
//delete
export const deleteRooms = async(req, res, next)=>{
    try{
        await Room.findByIdAndDelete(req.params.id);
        res.status(200).json("Room has been deleted");
          }
          catch(err){
           next(err);
          } 
}
//get
export const getRooms = async(req, res, next)=>{
    try{
        const getRoom = await Room.findById(req.params.id);
        res.status(200).json(getRoom);
          }
          catch(err){
           next(err);
          }   
}

//get all
export const getallRooms = async(req, res, next)=>{
    try{
        const getallrooms = await Room.find();
        res.status(200).json(getallrooms);
          }
          catch(err){
           next(err);
}
}
