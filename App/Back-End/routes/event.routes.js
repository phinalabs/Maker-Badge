const express = require('express');
const router = express.Router();

const eventControl = require('../controllers/event.controller');
const authToken = require('../middleware/authToken');


router.get('/', eventControl.findAllEvents);

router.get('/:id', eventControl.findOneEvent);

router.post('/', eventControl.createEvent);

router.put('/:id', eventControl.updateEvent);

router.delete('/:id', eventControl.deleteEvent);


module.exports = router;