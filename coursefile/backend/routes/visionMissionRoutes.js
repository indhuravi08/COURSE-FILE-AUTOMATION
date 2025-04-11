const express = require("express");
const VisionMission = require("../models/VisionMission");

const router = express.Router();

// Save Vision & Mission
router.post("/", async (req, res) => {
    try {
        const { vision, mission } = req.body;

        if (!vision || !mission) {
            return res.status(400).json({ message: "Vision and Mission are required" });
        }

        const newEntry = new VisionMission({ vision, mission });
        await newEntry.save();

        res.status(201).json({ message: "Vision & Mission saved successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error saving data", error: error.message });
    }
});

// Get Vision & Mission
router.get("/", async (req, res) => {
    try {
        const data = await VisionMission.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Error fetching data", error: error.message });
    }
});

module.exports = router;
