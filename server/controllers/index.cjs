const fs = require('fs');
const path = require('path');

const getBookings = (_, res) => {
  try {
    const db = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, '..', 'db.json'), 'UTF-8')
    );
    const bookings  = db;

    return res.json(bookings);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
}

module.exports = getBookings;