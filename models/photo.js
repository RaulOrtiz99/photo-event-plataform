const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
  url: { type: String, required: true },
  faces: [{
    descriptor: { type: Array },
    landmarks: { type: Array },
  }],
});

const Photo = mongoose.model('Photo', photoSchema);
module.exports = Photo;
