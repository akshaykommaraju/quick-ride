// server/index.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/quickride", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ Mongo error:", err));

// Ride schema
const RideSchema = new mongoose.Schema({
  pickup: [Number],
  drop: [Number],
  timestamp: { type: Date, default: Date.now }
});

const Ride = mongoose.model("Ride", RideSchema);

app.post("/api/rides", async (req, res) => {
  const { pickup, drop } = req.body;
  if (!pickup || !drop) return res.status(400).json({ message: "Missing coordinates" });

  const ride = new Ride({ pickup, drop });
  await ride.save();
  res.status(201).json({ message: "Ride saved" });
});

app.listen(5000, () => console.log("🚀 Server running on http://localhost:5000"));