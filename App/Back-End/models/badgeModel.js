let mongoose = require('mongoose');

// Define schema
let badgeSchema = new mongoose.Schema({
    badgeId: {
        type: Number,
        required: true
    },
    owner: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        default: false
    }
});

var Badge =  module.exports = mongoose.model('Badge', badgeSchema);
