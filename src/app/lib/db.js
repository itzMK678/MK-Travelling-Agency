import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Check if MongoDB URI exists
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not defined in the environment variables.");
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