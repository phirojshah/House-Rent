const mongoose = require("mongoose");
const RoomdescSchema = new Schema({
    place: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    phonenumber: {
        type: Number,
        required: true
    }
});
module.exports = mongoose.model('roomdesc', RoomdescSchema); 