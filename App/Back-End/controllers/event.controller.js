const Event = require('../models/event');

exports.findAllEvents = async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events)
    } catch (error) {
        res.status(500).json({
            message: error.message || "Something has gone wrong retreiving the events"
        })
    }
};


exports.createEvent = async (req, res) => {
    try {
        const newEvent = new Event({
            name: req.body.name,
            date: req.body.date,
            location: req.body.location,
            createdBy: req.body.createdBy,
            details: req.body.details ? req.body.details : false
        });
        const eventSaved = await newEvent.save();
        res.json(eventSaved)
    } catch (error) {
        res.status(500).json({
            message: error.message || "Something goes wrong creating a event"
        })
    }
};


exports.findOneEvent = async (req, res) => {
    const { id } = req.params;
    try {
        const event = await Event.findById(id)
        if(!event) return res.status(404).json({
            message: `Event with id ${id} does not exists!`
        });
        res.json(event)
    } catch (error) {
        res.status(500).json({
            message: error.message || `Error retrieving event with id: ${id}`
        })
    }
};


exports.deleteEvent = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await Event.findByIdAndDelete(id)
        res.json({
            message: `${data.name} - Event were deleted successfully!`
        })
    } catch (error) {
        res.status(500).json({
            message: `Cannot delete event with id ${id}`
        })
    }
}


exports.updateEvent = async (req, res) => {
    const {id} = req.params;
    try {
        await Event.findByIdAndUpdate(id, req.body)
    res.json({
        message: "Event was updated successfully"
    })
    } catch (error) {
        res.status(500).json({
            message: `Cannot update event with id: ${id}`
        })
    }
}
