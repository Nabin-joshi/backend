import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";

const app = express();

//post routes
app.use("/posts", postRoutes);

//user routes
app.use("/user", userRoutes);

app.use(cors());
dotenv.config();
const PORT = process.env.PORT;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log("Server runnnning"));
  })
  .catch((err) => console.log(err));
