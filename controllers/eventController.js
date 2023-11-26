const Event = require('../models/event');
const Photo = require('../models/photo');

exports.getEvent = async (req, res) => {
  const { eventId } = req.params;

  try {
    const event = await Event.findById(eventId).populate('photos');
    res.json(event);
  } catch (error) {
    res.status(404).json({ message: 'Event not found' });
  }
};
