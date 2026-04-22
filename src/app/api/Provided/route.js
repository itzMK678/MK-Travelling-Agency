const express = require("express");
const router = express.Router();
const CustomPackage = require("../models/CustomPackage");

// ✅ GET all packages
router.get("/", async (req, res) => {
  try {
    const packages = await CustomPackage.find();
    res.status(200).json(packages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ✅ POST create package
router.post("/", async (req, res) => {
  try {
    const { number, days, place, budget, preferpoints, CNIC, Name } = req.body;

    const customPackage = new CustomPackage({
      Name,
      CNIC,
      number,
      days,
      place,
      budget,
      preferpoints,
    });

    await customPackage.save();
    res.status(201).json(customPackage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;