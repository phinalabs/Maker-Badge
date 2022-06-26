const User = require('../models/User');
const jwt = require('jsonwebtoken');


exports.signUp = async (req, res) => {
    const { name, email, password } = req.body;


    const newUser = new User({
        name, email, password: await User.encryptPassword(password)
    })


    const savedUser = await newUser.save();
    console.log(savedUser);


    const newToken = jwt.sign({ id: savedUser._id }, 'secretKey', {
        expiresIn: 86400 // one day
    })


    res.status(200).json({ newToken })
}


exports.logIn = async (req, res) => {
    const userExist = await User.findOne({ email: req.body.email });


    if (!userExist) return res.status(400).json({
        message: 'User not exists'
    })


    const matchPassword = await User.comparePassword(req.body.password, userExist.password)


    if (!matchPassword) return res.status(401).json({
        token: null,
        message: 'Invalid password'
    })
    console.log(userExist)


    const token = jwt.sign({ id: userExist._id }, 'secretKey', {
        expiresIn: 86400
    })


    return res.json({
        _id: userExist._id,
        name: userExist._id,
        message: 'Auth Succesful',
        token: token
    })

}
