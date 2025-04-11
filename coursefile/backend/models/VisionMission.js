const mongoose = require('mongoose');

const VisionMissionSchema = new mongoose.Schema({
    vision: { type: String, required: true },
    mission: { type: String, required: true }
});

module.exports = mongoose.model('VisionMission', VisionMissionSchema);
