import { uploadPicture } from "../middleware/uploadPictureMiddleware.js";
import User from "../models/User.js";
import { fileRemover } from "../utils/fileRemover.js";
 const registeruser = async (req, res, next) => {
  try {
    const {name, email, password} = req.body;
    //check wether the user exist or not
    let user = await User.findOne({email});
    if(user){
        throw new Error("User have already registered");
    }
    //creating a new user
    user = await User.create({
        name, email, password,
    });
    return res.status(201).json({
        _id: user._id,
        avatar: user.avatar,
        name: user.name,
        email: user.email,
        verified: user.admin,
        token: await user.generateJWT(),
    });
  } catch (error) {
   next(error)
  }
}

 const  loginUser = async (req, res, next) => {
     try {
        const {email, password} = req.body;
        let user = await User.findOne({email});
        if(!user){
            throw new Error("email not found")
        }
        if(await user.comparePassword(password)){
            return res.status(201).json({
                _id: user._id,
                avatar: user.avatar,
                name: user.name,
                email: user.email,
                verified: user.verified,
                Admin: user.admin,
                token: await user.generateJWT(),
            });
        } else {
            throw new Error("Invalid Email or Password")
        }
     } catch (error) {
        next(error)
     }
}

 const userProfile = async (req, res, next) => {
    try {
        let user = await User.findById(req.user._id);
        if(user){
            return res.status(201).json({
                _id: user._id,
                avatar: user.avatar,
                name: user.name,
                email: user.email,
                verified: user.verified,
                Admin: user.admin,
            }); 
        } else{
            let error = new Error("User Not Found");
            error.statusCode = 404;
            next(error);
        }
        
    } catch (error){
     next(error);
    }
}

const UpdateProfile = async (req, res, next) => {
    try {
        let user = await User.findById(req.user._id);
        if(!user){
            throw new Error("User Not Found");
        }
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        if(req.body.password && req.body.length < 6){
             throw new Error("Password length must be at least 6 characters");
        } else if(req.body.password){
            user.password = req.body.password;
        }


        const updatedUserProfile = await user.save();
        res.json({
            _id: updatedUserProfile._id,
            avatar: updatedUserProfile.avatar,
            name: updatedUserProfile.name,
            email: updatedUserProfile.email,
            verified: updatedUserProfile.verified,
            Admin: updatedUserProfile.admin,
            token: await updatedUserProfile.generateJWT(),
        })
    } catch (error) {
        next(error);
    }
};

const updateProfilePicture = async (req, res, next) => {
    try {
     const upload = uploadPicture.single('profilePicture');
     upload(req, res, async function(err){
        if(err){
            const error = new Error("An Unknown error occured when uploading" + err.message);
            next(error);
        }else{
            //everything went well
            if(req.file){
                let filename;
                let updatedUser =  await User.findById(req.user._id);
                filename = updatedUser.avatar;
                if(filename){
                  fileRemover(filename);
                }
                updatedUser.avatar = req.file.filename;
                await updatedUser.save();
                res.json({

                 _id: updatedUser._id,
                 avatar: updatedUser.avatar,
                 name: updatedUser.name,
                email: updatedUser.email,
                verified: updatedUser.verified,
                Admin: updatedUser.admin,
                token: await updatedUser.generateJWT(),
                })
            }else{
                let filename;
                let updatedUser = await User.findById(req.user._id);
                filename =  updatedUser.avatar;
                updatedUser.avatar = "";
                await updatedUser.save();
                fileRemover(filename);
                res.json({
                    _id: updatedUser._id,
                    avatar: updatedUser.avatar,
                    name: updatedUser.name,
                   email: updatedUser.email,
                   verified: updatedUser.verified,
                   Admin: updatedUser.admin,
                   token: await updatedUser.generateJWT(),
                })

            }
        }
     })   
    } catch (error) {
        next(error);
    }
}

export {registeruser, loginUser, userProfile, UpdateProfile, updateProfilePicture};