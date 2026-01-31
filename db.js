import mongoose from 'mongoose';
import dotenv from 'dotenv';

// We call config here as well to be 100% safe
dotenv.config();

const connectDB = async () => {
  const uri = process.env.MONGO_URI;

  if (!uri) {
    console.error("ERROR: MONGO_URI is not defined in your .env file.");
    process.exit(1);
  }

  try {
    const conn = await mongoose.connect(uri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Database Connection Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;