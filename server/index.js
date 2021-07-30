const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./db/connectDB');
const dotenv = require('dotenv');
const colors = require('colors');

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`.cyan))
  } catch (error) {
    console.log(error);
  }
}

startServer();
