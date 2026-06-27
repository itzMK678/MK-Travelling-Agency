import mongoose from "mongoose";

const CustomPackageSchema = new mongoose.Schema({
  Name: String,
  CNIC: String,
  number: Number,
  days: Number,
  place: String,
  budget: Number,
  preferpoints: [String],
});

export default mongoose.models.CustomPackage ||
  mongoose.model("CustomPackage", CustomPackageSchema);
  // For Creating package according to need of person
