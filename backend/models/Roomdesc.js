const mongoose = require("mongoose");
const { Schema } = mongoose;
const RoomdescSchema = new Schema({
<<<<<<< HEAD
  place: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  images: [
    {
      public_id: {
=======
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    place: {
>>>>>>> 060a1add743bbc69817e70d9c90c5274fc2ec1cc
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  phonenumber: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = mongoose.model("roomdesc", RoomdescSchema);
