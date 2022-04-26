const Event = require('../models/Event');

const eventController = {
  // GET ALL
  getEvent: async (req, res) => {
    try {
      const perPage = parseInt(req.query.perPage, 10);
      const page = parseInt(req.query.page, 10);
      let sortKey = req.query.sortKey;
      const sort = req.query.sort === 'desc' ? 1 : -1;
      let sortObject = {};
      sortObject[sortKey] = sort;
      const event = await Event.find().skip((perPage * page) - perPage).limit(perPage).sort(sortObject);
      res.status(200).json(event);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // CREATE
  createEvent: async (req, res) => {
    try {
      const newEvent = await new Event({
        eventName: req.body.eventName,
        startDate: req.body.startDate,
        dueDate: req.body.dueDate,
        description: req.body.description,
      });

      // Save to DB
      const event = await newEvent.save();
      res.status(200).json(event);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // EDIT
  getEventById: async (req, res) => {
    try {
      const event = await Event.findById(req.params.id);
      res.status(200).json(event);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // UPDATE
  updateEvent: async (req, res) => {
    try {
      await Event.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).json('Event updated');
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // DELETE
  deleteEvent: async (req, res) => {
    try {
      await Event.findByIdAndDelete(req.params.id);
      res.status(200).json('Event deleted');
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = eventController;
