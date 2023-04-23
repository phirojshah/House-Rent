const mongoose = require("mongoose");
const { Schema } = mongoose;
const RoomdescSchema = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
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
    },
    date: {
        type: Date,
        default: Date.now()
    }

});
module.exports = mongoose.model('roomdesc', RoomdescSchema); 