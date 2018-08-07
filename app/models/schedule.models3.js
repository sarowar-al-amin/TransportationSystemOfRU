const mongoose = require('mongoose');

const  ScheduleSchemaShift = mongoose.Schema({
    busNumber: String,//defining the schema for schedule
    destination: String,
    arivalTime: String,
    departureTime: String,
    passengerType: String
   },{
        timestamps: true
    });




module.exports = mongoose.model('ScheduleShift',ScheduleSchemaShift);