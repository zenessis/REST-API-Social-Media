import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes.js";
import blogRouter from "./routes/blog-routes.js";
import dotenv from 'dotenv';

dotenv.config(); 

const app = express();
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);
mongoose
  .connect(process.env.MONGO_URI) 
  .then(() => app.listen(process.env.PORT)) 
  .then(() =>
    console.log("Connected to Database and Listening to localhost:" + process.env.PORT)
  )
  .catch((err) => console.log(err));
