const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

async function hashPassword(password) {
  return bcrypt.hash(password, 10);
}

async function comparePasswords(inputPassword, hashedPassword) {
  return bcrypt.compare(inputPassword, hashedPassword);
}

function generateToken(user) {
  return jwt.sign({ userId: user._id }, 'SECRET_KEY', { expiresIn: '1h' });
}

module.exports = { hashPassword, comparePasswords, generateToken };
