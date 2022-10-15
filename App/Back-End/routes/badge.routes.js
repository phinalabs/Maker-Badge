const express = require('express');
const router = express.Router();

const badgeControl = require('../controllers/badge.controller');


router.get('/', badgeControl.findAllBadges);

router.get('/:id', badgeControl.findOneBadge);

router.post('/', badgeControl.createBadge);

router.put('/:id', badgeControl.updateBadge);

router.delete('/:id', badgeControl.deleteBadge);


module.exports = router;