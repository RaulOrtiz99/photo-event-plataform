const mongoose = require('mongoose');

// Definición del esquema del evento
const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  photos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Photo' }],
});

// Creación del modelo Event
const Event = mongoose.model('Event', eventSchema);

// Exportación del modelo para su uso en otros archivos
module.exports = Event;
