let Badge = require('../models/badgeModel');


exports.findAllBadges = async (req, res) => {
    try {
        let badges = await Badge.find();
        res.json(badges)
    } catch (error) {
        res.status(500).json({
            message: error.message || "Something went wrong retieving the badge"
        })
    }
};


exports.createBadge = async (req, res) => {
    try {
        let newBadge = new Badge({
            id: req.body.id,
            owner: req.body.owner,
            status: req.body.status ? req.body.status : false
        });
        let badgeSaved = await newBadge.save();
        res.json(badgeSaved)
    } catch (error) {
        res.status(500).json({
            message: error.message || "Something went wrong creating the badge"
        })
    }
};


exports.findOneBadge = async (req, res) => {
    let { id } = req.params;
    try {
        let badge = await Badge.findById(id)
        if(!badge) return res.status(404).json({
            message: `Badge with id ${id} does not exists!`
        });
        res.json(badge)
    } catch (error) {
        res.status(500).json({
            message: error.message || `Error retrieving badge with id: ${id}`
        })
    }
};


exports.deleteBadge = async (req, res) => {
    let { id } = req.params;
    try {
        let data = await Badge.findByIdAndDelete(id)
        res.json({
            message: `${data.name} - Badge were deleted successfully!`
        })
    } catch (error) {
        res.status(500).json({
            message: `Cannot delete badge with id ${id}`
        })
    }
}


exports.updateBadge = async (req, res) => {
    let {id} = req.params;
    try {
        await Badge.findByIdAndUpdate(id, req.body)
    res.json({
        message: "Badge was updated successfully"
    })
    } catch (error) {
        res.status(500).json({
            message: `Cannot update badge with id: ${id}`
        })
    }
}
