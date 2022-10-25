let express = require('express');
let router = express.Router();

let badgeControl = require('../controllers/badge.controller');


router.get('/', badgeControl.findAllBadges);

router.get('/:id', badgeControl.findOneBadge);

router.post('/', badgeControl.createBadge);

router.put('/:id', badgeControl.updateBadge);

router.delete('/:id', badgeControl.deleteBadge);


module.exports = router;