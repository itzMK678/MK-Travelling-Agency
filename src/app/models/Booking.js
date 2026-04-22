const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  Name: String ,
  CNIC: String,
  Persons: Number,
  days: Number,
  place: String,
  
});

module.exports = mongoose.model("Booking", BookingSchema);