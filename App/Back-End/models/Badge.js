const mongoose = require('mongoose');

// Define schema
const badgeSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    owner: {
        type: Number,
        required: true,
    },
    status: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Badge', badgeSchema);
