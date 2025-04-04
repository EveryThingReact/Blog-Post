import pkg from 'jsonwebtoken';
const {verify} = pkg;

import User from "../models/User.js";

export const authGuard = async (req, res, next) => {
    if(req.headers.authorization &&
       req.headers.authorization.startwith("Bearer")){
       try {
        const  token = req.headers.authorization.split(" ")[1];
        const {id} = verify(token, process.env.JWT_SECRETE);
        req.user = await User.findById(id).select("-password")
        next();
       } catch (error) {
         const err = new Error("Not Authorized, Token failed");
         err.statusCode = 401;
         next(err);
       }
    } else{
      let error = new Error("Not authorized, No Token");
      error.statusCode = 401;
      next(error);
    }
};