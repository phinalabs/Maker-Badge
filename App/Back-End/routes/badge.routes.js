const express = require('express');
const router = express.Router();

const badgeControl = require('../controllers/badge.controller');
const authToken = require('../middleware/authToken');


router.get('/', badgeControl.findAllBadges);

router.get('/:id', badgeControl.findOneBadge);

//router.post('/', [authToken.verifyToken], badgeControl.createBadge);

router.post('/', badgeControl.createBadge);

router.put('/:id', [authToken.verifyToken], badgeControl.updateBadge);

router.delete('/:id', [authToken.verifyToken], badgeControl.deleteBadge);


module.exports = router;