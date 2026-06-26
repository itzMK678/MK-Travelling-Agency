import mongoose from "mongoose";
const connectDB = async () => {
  try {
    // Check if MongoDB URI exists
   
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI ni labdi pai");
      console.log(process.env.MONGO_URI)
    }

    // If already connected, don't reconnect
    if (mongoose.connection.readyState === 1) {
      return;
    }

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");
  } catch (error) {
    console.error("DB Error:", error.message);
    throw error; // Re-throw so the calling code knows the connection failed
  }
};

export default connectDB;