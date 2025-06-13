import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectToMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("connected to mongodb");
  } catch (error) {
    console.log(`cannot connect to mongo db ${error.message}`);
  }
};

export default connectToMongoDb;
