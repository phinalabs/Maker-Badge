let express = require('express');
let router = express.Router();

let eventControl = require('../controllers/event.controller');


router.get('/', eventControl.findAllEvents);

router.get('/:id', eventControl.findOneEvent);

router.post('/', eventControl.createEvent);

router.put('/:id', eventControl.updateEvent);

router.delete('/:id', eventControl.deleteEvent);


module.exports = router;