let express = require('express');
let router = express.Router();

let badgeControl = require('../controllers/badge.controller');


router.get('/', badgeControl.findAllBadges);

router.get('/:badgeId', badgeControl.findOneBadge);

router.post('/', badgeControl.createBadge);

router.put('/:badgeId', badgeControl.updateBadge);

router.delete('/:badgeId', badgeControl.deleteBadge);


module.exports = router;