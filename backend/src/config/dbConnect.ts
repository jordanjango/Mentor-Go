import mongoose from 'mongoose';
import dotenv from 'dotenv'; 
dotenv.config({ path: __dirname + '/./../../.env' });
const username = process.env.MONGO_URI_USERNAME;
const password = process.env.MONGO_URI_PASSWORD;
const connectionString = `mongodb+srv://${username}:${password}@cluster0.avh0w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
//Connect with the database function
const dbConnect = async () => {
  try {
    await mongoose.connect(connectionString);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error in connecting to the database", error);
  }
};

export default dbConnect;