const mongoose = require("mongoose");

const CustomPackageSchema = new mongoose.Schema({
  Name: String ,
  CNIC: String,
  number: Number,
  days: Number,
  place: String,
  budget: Number,
  preferpoints: [String]
});

module.exports = mongoose.model("CustomPackage", CustomPackageSchema);