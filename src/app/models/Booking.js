import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
  Name: String,
  CNIC: String,
  Persons: Number,
  days: Number,
  place: String,
});

export default mongoose.models.Booking ||
  mongoose.model("Booking", BookingSchema);