import express from "express";
const router = express.Router();
import { UpdateProfile, loginUser, registeruser,userProfile,updateProfilePicture } from "../controllers/UserControllers.js";
import { authGuard } from "../middleware/authMiddleware.js"
router.post('/register', registeruser);
router.post('/login', loginUser);
router.get('/profile',authGuard, userProfile);
router.put('/updateProfile',authGuard, UpdateProfile);
router.put('/updateProfilePicture',authGuard, updateProfilePicture);




export default router;
