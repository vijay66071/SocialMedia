const express=require("express");
const app=express()
const mongoose=require("mongoose")
const dotenv=require("dotenv")
const helmet=require("helmet")
const morgan=require("morgan");
const userRoute=require("./routes/users")
const AuthRoute=require("./routes/auth")
const PostRoute=require("./routes/posts")
const cors = require('cors');
const multer=require('multer')
const path = require("path");
const fs=require("fs")
dotenv.config();
// const __dirname = path.resolve();
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });

    app.use("/images", express.static(path.join(__dirname, "public/images")));
//middleware
app.use(express.json())
app.use(helmet());
app.use(morgan("common"));
app.use(cors())
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      // Specify the destination directory dynamically based on the request
      const uploadPath = path.join("public", "images");
      fs.mkdirSync(uploadPath, { recursive: true }); // Ensure the directory exists
      cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
      // Generate a unique filename for the uploaded file
      const filename = `${file.originalname}`;
      cb(null, filename);
    },
  });
const upload=multer({storage})

app.post("/api/upload",upload.single("file"),(req,res)=>{
    try {
        return res.status(200).json("file uploaded")
    } catch (error) {
        console.log(error);
    }
})






app.use("/api/users",userRoute)
app.use("/api/auth",AuthRoute)
app.use("/api/post",PostRoute)

app.listen(8800,()=>{
    console.log("backend is at 8800")
})