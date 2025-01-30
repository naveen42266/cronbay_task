const express = require("express");
const mongoose = require("mongoose");
const { getDatabase } = require("../db");
const { COLLECTION_NAME } = require("../config");

const router = express.Router();

// Add a new bid
router.post("/add", async (req, res) => {
  try {
    const { name, bidPrice, deadline } = req.body;

    // Validation
    if (!name || !bidPrice || !deadline) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const db = getDatabase(); // Access the database
    const result = await db.collection(COLLECTION_NAME).insertOne({
      name, 
      bidPrice, 
      deadline,
      createdAt: new Date(), // Fixed date issue
    });

    res.status(201).json({ message: "Bidding added successfully", bidId: result.insertedId });
  } catch (err) {
    console.error("Error adding bid:", err);
    res.status(500).json({ message: "Failed to bid the project" });
  }
});


// Get all bidding
router.get("/all", async (req, res) => {
    try {
        const db = getDatabase(); // Access the database
        const items = await db.collection(COLLECTION_NAME).find().toArray();

        res.status(200).json(items);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to fetch bidding data" });
    }
});


module.exports = router;
