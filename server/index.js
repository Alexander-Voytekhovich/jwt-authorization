const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))
  } catch (error) {
    console.log(error);
  }
}

startServer();
