const mongoose = require('mongoose');

const connectDB = async() => {
  try {
    const db = await mongoose.connect(process.env.DB_URL, {useUnifiedTopology: true, useNewUrlParser: true});
    console.log(`MongoDB connected: ${db.connection.host}`.cyan)
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.inverse.bold)
  }
  
}

module.exports = connectDB;
