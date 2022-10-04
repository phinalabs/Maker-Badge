const express = require('express');


const router = express.Router();


const authCtrl = require('../controllers/auth.controller');

//Disabled since we don't have signups
router.post('/signup', authCtrl.signUp);


router.post('/login', authCtrl.logIn);



module.exports = router;