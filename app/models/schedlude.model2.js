const mongoose = require('mongoose');


const  ScheduleSchemaLocation = mongoose.Schema({
        busNumber: String,//defining the schema for location
        shift: String,
        arivalTime: String,
        departureTime: String,
        passengerType: String
       },{
            timestamps: true
        });
    
module.exports = mongoose.model('ScheduleLocation',ScheduleSchemaLocation);