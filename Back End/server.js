import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/UserRoutes.js";
import { errorResponseHandler, invalidPathHandler } from "./middleware/errorHandler.js";
//Routes
dotenv.config();
const app = express();
app.get("/",(req,res) => {
    res.send("Server is running....");
});

app.use("/api/users", userRoutes);
app.use(errorResponseHandler);
app.use(invalidPathHandler);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server is running at port ${PORT}`));