const mongoose = require('mongoose');

// I organise my models the best way possible to me, you should too
const userSchema = mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    maxLength: 25,
    required: [true, 'Please provide a name to proceed']
  },
  email: {
    type: String,
    minLength: 11,
    maxLength: 30,
    required: [true, 'Please provide an email to proceed'],
    unique: true
  },
  password: {
    type: String,
    minLength: 6,
    required: [true, 'Please provide a password to proceed']
  }
});

// Nothing complex to see here, just model definition

module.exports = mongoose.model('User', userSchema);
