const mongoose = require("mongoose");

const ProvidedPackagesSchema = new mongoose.Schema({
  pic: String,
  Name: String,
  description: String,
  days: Number,
  Price: Number,
  pinpoints: [String],
  Map: String,
});

module.exports = mongoose.model("ProvidedPackage", ProvidedPackagesSchema);