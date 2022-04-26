const express = require('express');
const cors = require('cors');

const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const authRoute = require('./routes/auth');
const eventRoute = require('./routes/event');

dotenv.config();

mongoose.connect(process.env.MONGODB_URL, () => {
  console.log('CONNECTED TO MONGO DB');
});
app.use(cors());
app.use(cookieParser());
app.use(express.json());

// ROUTES
app.use('/auth', authRoute);
app.use('/event', eventRoute);

app.listen(process.env.PORT, () => {
  console.log(`[server]: Server is running at https://localhost:${process.env.PORT}`);
});
