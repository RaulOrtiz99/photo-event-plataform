const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema(
    {
        url: { type: String, required: true },
    }
);

const eventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    date: { type: Date, required: true },
    location: { type: String, required: true },
    photos: [photoSchema],



}); 


const Event = mongoose.model('Event', eventSchema); 

module.exports = Event; 