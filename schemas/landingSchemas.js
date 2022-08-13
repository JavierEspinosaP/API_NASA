
const mongoose = require('mongoose');
const landingSchema = new mongoose.Schema ({
    name: {
        type: String,
    },
    id: {
        type: Number,
        unique: true
    },
    nametype: {
        type: String,
    },
    recclass: {
        type: String,

    },
    mass: {
        type: Number,
    },
    fall: {
        type: String,
    },
    year: {
        type: String,
    },
    reclat: {
        type: Number,
    },
    reclong:{
        type: Number,
    },
    geolocation: {
        latitude: {
            type: Number,
        },
        longitude:{
            type: Number,
        }
    }
    
})

const Landings = mongoose.model('landings',landingSchema);

module.exports = Landings;

