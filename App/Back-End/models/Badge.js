const mongoose = require('mongoose');


// Define schema
const badgeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    owner: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Badge', badgeSchema);
