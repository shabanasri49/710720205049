const mongoose = require("mongoose");

const TrainSchema = mongoose.Schema({
    user: {   // map with userid
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    trainName: {
        type: String,
    },
    trainNumber: {
        type: String,
    },
    departureTime: [
        {
            Hours: {
                type: Number,
                required: true,
            },
            Minutes: {
                type: Number,
                required: true,
            },
            Seconds: {
                type: Number,
                required: true,
            },
        },
    ],
    seatsAvailable: [
        {
            sleeper: {
                type: String,
                required: true,
            },
            AC: {
                type: String,
                required: true,
            },
        }
    ],
    price: [//json objects are combined 
        sleeper: {
            type: String,
            required: true,
        },
        AC: {
            type: String,
            required: true,
        },
    ],
    delayedby: {
        type: Number,
        required: true
    },

});

module.exports = mongoose.model("trains", TrainSchema);