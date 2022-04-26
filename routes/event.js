const eventController = require('../controllers/eventController');
const {
  verifyTokenAndUserAuthorization,
} = require('../controllers/verifyToken');

const router = require('express').Router();
// GET ALL
router.get('/', verifyTokenAndUserAuthorization, eventController.getEvent);

// CREATE
router.post('/', verifyTokenAndUserAuthorization, eventController.createEvent);

// EDIT
router.get('/:id', verifyTokenAndUserAuthorization, eventController.getEventById);

// UPDATE
router.put('/:id', verifyTokenAndUserAuthorization, eventController.updateEvent);

// DELETE
router.delete('/:id', verifyTokenAndUserAuthorization, eventController.deleteEvent);

module.exports = router;
