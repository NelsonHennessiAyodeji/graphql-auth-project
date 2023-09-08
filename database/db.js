const mongoose = require('mongoose');

// This pattern is designed to kill the application if this db function
// doesn't execute successfully
// why? cos I beleive their is no point for the application to run if the database
// is not stable, it's going to be a waste of everybody's time
const db = async (uri) => {
  try {
    await mongoose.connect(uri);
    console.log('Database connected successfully');
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = db;
