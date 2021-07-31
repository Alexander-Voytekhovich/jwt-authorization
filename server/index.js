const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const colors = require('colors');

const ApiError = require('./exeptions/apiErrors');

const errorMiddleware = require('./middleware/error.middleware');

const connectDB = require('./db/connectDB');
const router = require('./router');

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use('/api', router);

app.use(errorMiddleware);

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`.cyan));
  } catch (error) {
    console.log(error);
  }
};

startServer();
