const Badge = require('../models/Badge');


exports.findAllBadges = async (req, res) => {
    try {
        const badges = await Badge.find();
        res.json(badges)
    } catch (error) {
        res.status(500).json({
            message: error.message || "Something goes wrong retieving the tasks"
        })
    }
};


exports.createBadge = async (req, res) => {
    try {
        const newBadge = new Badge({
            name: req.body.name,
            author: req.body.author,
            status: req.body.status ? req.body.status : false
        });
        const badgeSaved = await newBadge.save();
        res.json(badgeSaved)
    } catch (error) {
        res.status(500).json({
            message: error.message || "Something goes wrong creating a badge"
        })
    }
};


exports.findOneBadge = async (req, res) => {
    const { id } = req.params;
    try {
        const badge = await Badge.findById(id)
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
    const { id } = req.params;
    try {
        const data = await Badge.findByIdAndDelete(id)
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
    const {id} = req.params;
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
