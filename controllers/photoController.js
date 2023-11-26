const Photo = require('../models/photo');


exports.getPhoto = async (req, res) => {
  const { photoId } = req.params;

  try {
    const photo = await Photo.findById(photoId);
    res.json(photo);
  } catch (error) {
    res.status(404).json({ message: 'Photo not found' });
  }
};