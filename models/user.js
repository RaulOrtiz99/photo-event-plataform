const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  photos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Photo' }],
});

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;
