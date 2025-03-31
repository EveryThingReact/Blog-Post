import multer from "multer";
import  Path from "path";
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname,"../uploads"))
    },
    filename: (req, file, cb)=>{
        cb(null, `${Date.now()} - ${file.originalname}`)
    }

})
const uploadPicture = multer({
 storage: storage,
 limits: {
    fileSize: 4 * 1000000 //4 MB
 },
 fileFilter: function(req, file, cb){
    let ext = path.extname(file.originalname);
    if(ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg'){
        return cb(new Error("Only Images are allowed"));
    }
    cb(null, true);
 }
})
export {uploadPicture}