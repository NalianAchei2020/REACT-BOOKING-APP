import bcrypt from 'bcrypt';
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
            //const {password, isAdmin, ...otherDetails} = user.doc;
            //res.status(200).json({...otherDetails});
            
    }
    catch(err){
    next(err)
    }
}
export const home = async(req, res, next)=>{
    res.send("hi")
}