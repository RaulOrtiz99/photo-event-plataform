const User = require('../models/user');
const Event = require('../models/event');

exports.subscribeAsPhotographer = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findByIdAndUpdate(userId, { isPhotographer: true }, { new: true });

    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.sendInvitation = async (req, res) => {
  const { eventId, photographerId } = req.params;

  try {
    const event = await Event.findById(eventId);
    const photographer = await User.findById(photographerId);

    if (!event || !photographer) {
      return res.status(404).json({ message: 'Event or photographer not found' });
    }

    photographer.invitations.push(eventId);
    await photographer.save();

    res.json(photographer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.acceptInvitation = async (req, res) => {
  const { userId, eventId } = req.params;

  try {
    const user = await User.findByIdAndUpdate(userId, { $pull: { invitations: eventId } }, { new: true });

    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
