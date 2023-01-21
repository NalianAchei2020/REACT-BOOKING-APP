import bcrypt from 'bcrypt';
import { config } from 'dotenv';
import jwt from 'jsonwebtoken';
import User from '../models/usermodel.js';
import {createError} from '../utils/error.js';


export const register = async(req, res, next)=>{
    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt)
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: hash,
    })
    
    await user.save();
    res.status(200).send({message: 'User Created'});
    }
    catch(err){
    next(err)
    }
}
export const login = async(req, res, next)=>{
    try{
        const user = await User.findOne({
            username:req.body.username
        })
        if(!user) return next(createError(404, "user not found!"));
        const isPasswordCurrent = await bcrypt.compare(req.body.password,
            user.password);
            if(!isPasswordCurrent) return next(createError(400, "Wrong username or password!"));
            const token = jwt.sign({id: user._id,  isAdmin:user.isAdmin}, 
                config.JWT_SECRET);

             /* res.cookie("access_token", token, {
                httpOnly: true,
              }).status(200).json(user); */           
            
              const {password, isAdmin, ...otherDatails} = user._doc;
              res.cookie("access_token", token, {
                httpOnly: true,})
              .status(200).json({...otherDatails});
    }
    catch(err){
    next(err)
    }
}
