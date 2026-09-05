import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import newsRoutes from "./routes/news_routes.js";

dotenv.config(); 
connectDB();

const app = express();

app.use(cors({ 
  origin: process.env.CLIENT_URL || "http://localhost:5173" 
})); 

app.use(express.json()); 

app.use("/api/myAss", newsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});