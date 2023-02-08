import express  from "express";
import {createRoom, deleteRooms, getallRooms, getRooms, updateRooms} from '../controllers/rooms.js';
import { verifyAdmin } from "../utils/verifyToken.js";

const roomsRouter = express.Router();

//create
roomsRouter.post('/', verifyAdmin, createRoom)
//update
roomsRouter.put('/:id', verifyAdmin ,updateRooms)
//delete
roomsRouter.delete('/:id', verifyAdmin, deleteRooms)
//get
roomsRouter.get('/:id', getRooms)
//get all
roomsRouter.get('/',getallRooms)


export default roomsRouter;