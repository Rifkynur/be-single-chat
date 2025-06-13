import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import connectToMongoDb from "./db/connectToMongoDb.js";

const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.listen(5000, () => {
  connectToMongoDb();
  console.log(`listen on port ${PORT}`);
});
