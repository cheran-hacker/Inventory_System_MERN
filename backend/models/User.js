// backend/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  googleId: { type: String, required: true, unique: true },
  name: String,
  email: String,
  avatar: String,
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
