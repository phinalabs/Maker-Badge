const mongoose = require('mongoose');


// Define schema
const eventsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: Date,
        required: true,
        validate: function (input) {
            return new Date(input) >= new Date();
        },
        message: input => `${input} must be greater than the current date!`
    },
    location: {
        type: String,
        required: true
    },
    createdBy: {
        type: String,
        required: true,
        trim: true
    },
    details: {
        type: String,
        reuired: true
    }
});

module.exports = mongoose.model('Events', eventsSchema);
