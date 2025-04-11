import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/UserRoutes.js";
import { errorResponseHandler, invalidPathHandler } from "./middleware/errorHandler.js";
import connectDB from "./config/db.js";
import cors from 'cors';
//Routes
dotenv.config();
const app = express();

connectDB();

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true, // for auth
  }));
  app.use(express.json());
  app.get("/",(req,res) => {
    res.send("Server is running....");
});
app.use("/api/users", userRoutes);
app.use(errorResponseHandler);
app.use(invalidPathHandler);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server is running at port ${PORT}`));