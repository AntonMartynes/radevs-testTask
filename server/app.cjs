const express = require('express');
const cors = require('cors');
require('dotenv').config();

const getBookings = require('./controllers/index.cjs');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.get('/bookings', getBookings);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`);
});
