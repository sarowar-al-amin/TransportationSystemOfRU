const mongoose = require('mongoose');

const  ScheduleSchema = mongoose.Schema({
    busNumber: String,//defining the schema for schedule
    destination: String,
    shift: String,
    arivalTime: String,
    departureTime: String,
    passengerType: String
   },{
        timestamps: true
    });



module.exports = mongoose.model('Schedule',ScheduleSchema);