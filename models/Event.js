const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema(
  {
    eventName: {
      type: String,
      require: true,
    },
    startDate: {
      type: Date,
    },
    dueDate: {
      type: Date,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('Event', eventSchema);
