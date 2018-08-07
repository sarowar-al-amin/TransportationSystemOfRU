//Schedule object declearing
const Schedule = require('../models/schedule.model.js');

//Location object declaering
const ScheduleLocation = require('../models/schedlude.model2.js');

//Schedule object declaring
//const ScheduleShift = require('../models/schedule.models3.js');
//Shift object declaring 
const ScheduleShift = require('../models/schedule.models3.js');


//Create and Save a new schedule for transprot
exports.create = (req, res ) => {
    //Checking validation request
    if(!req.body.destination || !req.body.busNumber ) {
        return res.status(400).send({
            message:"Every vichele must have resistration number. "
        });
    }
    // Create Schedule for a bus
    const schedules = new Schedule({
         busNumber: req.body.busNumber || "On Test" ,
         destination: req.body.destination,
         shift: req.body.shift,
         arivalTime: req.body.arivalTime,
         departureTime: req.body.departureTime,
         passengerType: req.body.passengerType || "Common or Combined Bus"
    });


    //Save Schedule in database
    schedules.save()
    .then(data => {
        res.send(data);
    }).catch (err => {
        res.status(500).send({
            message: err.message || "Something goes wrong while creating the schedule!!"
        });
    });

 
};





//Create and Save a new schedule for Bazar
exports.createBazar = (req, res ) => {
    //Checking validation request
    if(!req.body.shift) {
        return res.status(400).send({
            message:"Every vichele must have shift. "
        });
    }
    // Create Schedule for a bus
    const schedulelocation = new ScheduleLocation({
         busNumber: req.body.busNumber || "On Test" ,
         shift: req.body.shift,
         arivalTime: req.body.arivalTime,
         departureTime: req.body.departureTime,
         passengerType: req.body.passengerType || "Common or Combined Bus"
    });


    //Save Schedule in database
    schedulelocation.save()
    .then(data => {
        res.send(data);
    }).catch (err => {
        res.status(500).send({
            message: err.message || "Something goes wrong while creating the schedule!!"
        });
    });

 
};



//Create and Save a new schedule for Nouhata
exports.createNouhata = (req, res ) => {
    //Checking validation request
    if(!req.body.shift) {
        return res.status(400).send({
            message:"Every vichele must have shift. "
        });
    }
    // Create Schedule for a bus
    const schedulelocation = new ScheduleLocation({
         busNumber: req.body.busNumber || "On Test" ,
         shift: req.body.shift,
         arivalTime: req.body.arivalTime,
         departureTime: req.body.departureTime,
         passengerType: req.body.passengerType || "Common or Combined Bus"
    });


    //Save Schedule in database
    schedulelocation.save()
    .then(data => {
        res.send(data);
    }).catch (err => {
        res.status(500).send({
            message: err.message || "Something goes wrong while creating the schedule!!"
        });
    });

 
};




//Create and Save a new schedule for Nouhata
exports.createMorning = (req, res ) => {
    //Checking validation request
    if(!req.body.busNumber) {
        return res.status(400).send({
            message:"Every vichele must have shift. "
        });
    }
    // Create Schedule for a bus
    const scheduleShift = new ScheduleShift({
         busNumber: req.body.busNumber || "On Test" ,
         destination: req.body.destination,
         arivalTime: req.body.arivalTime,
         departureTime: req.body.departureTime,
         passengerType: req.body.passengerType || "Common or Combined Bus"
    });


    //Save Schedule in database
    scheduleShift.save()
    .then(data => {
        res.send(data);
    }).catch (err => {
        res.status(500).send({
            message: err.message || "Something goes wrong while creating the schedule!!"
        });
    });

 
};



//REtrieve and Return total schedule of transprotation from database
exports.findAll = (req,res)  => {
    Schedule.find()
    .then(schedules => {
        res.send(schedules);
    }).catch(err =>{
        res.status(500).send({
            message: err.message || "Some error occured while retrrieving total schedule!!"
        });
    });
};



//retrive and return total bus schedule for bazar
exports.findAllBazar = (req,res)  => {
    ScheduleLocation.find()
    .then(schedules => {
        res.send(schedules);
    }).catch(err =>{
        res.status(500).send({
            message: err.message || "Some error occured while retrrieving total schedule!!"
        });
    });
};


//retrive and return total bus schedule for Nouhata
exports.findAllNouhata = (req,res)  => {
    ScheduleLocation.find()
    .then(schedules => {
        res.send(schedules);
    }).catch(err =>{
        res.status(500).send({
            message: err.message || "Some error occured while retrrieving total schedule!!"
        });
    });
};



//retrive and return total bus schedule for Nouhata
exports.findAllMorning = (req,res)  => {
    ScheduleShift.find()
    .then(schedules => {
        res.send(schedules);
    }).catch(err =>{
        res.status(500).send({
            message: err.message || "Some error occured while retrrieving total schedule!!"
        });
    });
};



//Retriving schedule of a single bus
exports.findOne = (req, res) => {
    Schedule.findById(req.params.busNumber)
    .then(schedules => {
        if(!schedules) {
            return res.status(404).send({
                message:"Shedule not found for this bus number!!"
            });
        }
        res.send(schedules);
    }).catch(err => {
        if (err.kind == 'ObjectId') {
            return res.status(404).send({
                message: "Shedule not found with the bus number! " + req.paarams.busNumber
            });
        }

        return res.status(500).send({
            message: " Error retriving schedule with bus number " + req.params.busNumber
        });

    });

};



//Retriving schedule of a single bus of bazar
exports.findOneBazar = (req, res) => {
    ScheduleLocation.findById(req.params.busNumber)
    .then(schedules => {
        if(!schedules) {
            return res.status(404).send({
                message:"Shedule not found for this bus number!!"
            });
        }
        res.send(schedules);
    }).catch(err => {
        if (err.kind == 'ObjectId') {
            return res.status(404).send({
                message: "Shedule not found with the bus number! " + req.paarams.busNumber
            });
        }

        return res.status(500).send({
            message: " Error retriving schedule with bus number " + req.params.busNumber
        });

    });

};



//Retriving schedule of a single bus of Nouhata
exports.findOneNouhata = (req, res) => {
    ScheduleLocation.findById(req.params.busNumber)
    .then(schedules => {
        if(!schedules) {
            return res.status(404).send({
                message:"Shedule not found for this bus number!!"
            });
        }
        res.send(schedules);
    }).catch(err => {
        if (err.kind == 'ObjectId') {
            return res.status(404).send({
                message: "Shedule not found with the bus number! " + req.paarams.busNumber
            });
        }

        return res.status(500).send({
            message: " Error retriving schedule with bus number " + req.params.busNumber
        });

    });

};





//Retriving schedule of a single bus of Nouhata
exports.findOneMorning = (req, res) => {
    ScheduleShift.findById(req.params.busNumber)
    .then(schedules => {
        if(!schedules) {
            return res.status(404).send({
                message:"Shedule not found for this bus number!!"
            });
        }
        res.send(schedules);
    }).catch(err => {
        if (err.kind == 'ObjectId') {
            return res.status(404).send({
                message: "Shedule not found with the bus number! " + req.paarams.busNumber
            });
        }

        return res.status(500).send({
            message: " Error retriving schedule with bus number " + req.params.busNumber
        });

    });

};






//Updating Schedule of a bus 
//for this purpose bus number will be used as a primary key

exports.update = (req, res) => {
    //Validation request
    if(!req.body.busNumber) {
        return res.status(400).send({
            message:"Schedule can not be null"
        });
    }


//find schedule of a bus and update it
Schedule.findByIdAndUpdate(req.params.busNumber, {
    busNumber: req.body.busNumber ,
    destination: req.body.destination,
    shift: req.body.shift,
    arivalTime: req.body.arivalTime,
    departureTime: req.body.departureTime,
    passengerType: req.body.passengerType || "Common or Combined bus"
   },{new : true }
).then(schedules => {
    if(!schedules) { 
    return res.status(404).send({
        message: "Schedule not found for the bus number " + req.params.schedulesId
        });
    }
     return res.send(schedules);
}).catch(err => {
    if (err.kind == 'ObjectId'){
        return res.status(404).send ({
            message: "Schedule not found for the bus " + req.params.schedulesId
        });
    }
    return res.status(500).send({
        message: "Error occuredd during to updating schedule " + req.params.schedulesId
    });
  });


};





//Updating Schedule of a bus of Bazar
//for this purpose bus number will be used as a primary key

exports.updateBazar = (req, res) => {
    //Validation request
    if(!req.body.busNumber) {
        return res.status(400).send({
            message:"Schedule can not be null"
        });
    }


//find schedule of a bus and update it
ScheduleLocation.findByIdAndUpdate(req.params.busNumber, {
    busNumber: req.body.busNumber ,
    shift: req.body.shift,
    arivalTime: req.body.arivalTime,
    departureTime: req.body.departureTime,
    passengerType: req.body.passengerType || "Common or Combined bus"
   },{new : true }
).then(schedules => {
    if(!schedules) { 
    return res.status(404).send({
        message: "Schedule not found for the bus number " + req.params.schedulesId
        });
    }
     return res.send(schedules);
}).catch(err => {
    if (err.kind == 'ObjectId'){
        return res.status(404).send ({
            message: "Schedule not found for the bus " + req.params.schedulesId
        });
    }
    return res.status(500).send({
        message: "Error occuredd during to updating schedule " + req.params.schedulesId
    });
  });


};



//Updating Schedule of a bus of Nouhata
//for this purpose bus number will be used as a primary key

exports.updateNouhata = (req, res) => {
    //Validation request
    if(!req.body.busNumber) {
        return res.status(400).send({
            message:"Schedule can not be null"
        });
    }


//find schedule of a bus and update it
ScheduleLocation.findByIdAndUpdate(req.params.busNumber, {
    busNumber: req.body.busNumber ,
    shift: req.body.shift,
    arivalTime: req.body.arivalTime,
    departureTime: req.body.departureTime,
    passengerType: req.body.passengerType || "Common or Combined bus"
   },{new : true }
).then(schedules => {
    if(!schedules) { 
    return res.status(404).send({
        message: "Schedule not found for the bus number " + req.params.schedulesId
        });
    }
     return res.send(schedules);
}).catch(err => {
    if (err.kind == 'ObjectId'){
        return res.status(404).send ({
            message: "Schedule not found for the bus " + req.params.schedulesId
        });
    }
    return res.status(500).send({
        message: "Error occuredd during to updating schedule " + req.params.schedulesId
    });
  });


};





//Updating Schedule of a bus of Nouhata
//for this purpose bus number will be used as a primary key

exports.updateMorning = (req, res) => {
    //Validation request
    if(!req.body.busNumber) {
        return res.status(400).send({
            message:"Schedule can not be null"
        });
    }


//find schedule of a bus and update it
ScheduleShift.findByIdAndUpdate(req.params.busNumber, {
    busNumber: req.body.busNumber ,
    destination: req.body.destination,
    arivalTime: req.body.arivalTime,
    departureTime: req.body.departureTime,
    passengerType: req.body.passengerType || "Common or Combined bus"
   },{new : true }
).then(schedules => {
    if(!schedules) { 
    return res.status(404).send({
        message: "Schedule not found for the bus number " + req.params.schedulesId
        });
    }
     return res.send(schedules);
}).catch(err => {
    if (err.kind == 'ObjectId'){
        return res.status(404).send ({
            message: "Schedule not found for the bus " + req.params.schedulesId
        });
    }
    return res.status(500).send({
        message: "Error occuredd during to updating schedule " + req.params.schedulesId
    });
  });


};




//Deleting shedule of a specific bus 
exports.delete = (req,res) => {
    Schedule.findByIdAndRemove (req.params.busNumber)
    .then(schedules => {
        if(!schedules) {
            return res.status(404).send({
                message: "Schedule of the bus is absent from the the database! " + req.params.schedulesId
            });
        }
        res.send({
            message:"Schedule of the bus is deleted."
        });
    }).catch(err => {
        if (err.kind == 'ObjectId') {
            return res.status(404).send({
                message: "Schedule is not found for the bus" + req.params.schedulesId
            });
        }
        return res.status(500).send({
            message: "Not possible to delete." + req.params.schedulesId        
        });
    });
};





//Deleting shedule of a specific bus from Bazar routes

exports.deleteBazar = (req,res) => {
    ScheduleLocation.findByIdAndRemove (req.params.busNumber)
    .then(schedules => {
        if(!schedules) {
            return res.status(404).send({
                message: "Schedule of the bus is absent from the the database! " + req.params.schedulesId
            });
        }
        res.send({
            message:"Schedule of the bus is deleted from Bazar route."
        });
    }).catch(err => {
        if (err.kind == 'ObjectId') {
            return res.status(404).send({
                message: "Schedule is not found for the bus" + req.params.schedulesId
            });
        }
        return res.status(500).send({
            message: "Not possible to delete." + req.params.schedulesId        
        });
    });
};




//Deleting shedule of a specific bus from Nouhata routes

exports.deleteNouhat = (req,res) => {
    ScheduleLocation.findByIdAndRemove (req.params.busNumber)
    .then(schedules => {
        if(!schedules) {
            return res.status(404).send({
                message: "Schedule of the bus is absent from the the database! " + req.params.schedulesId
            });
        }
        res.send({
            message:"Schedule of the bus is deleted from Nouhata route."
        });
    }).catch(err => {
        if (err.kind == 'ObjectId') {
            return res.status(404).send({
                message: "Schedule is not found for the bus" + req.params.schedulesId
            });
        }
        return res.status(500).send({
            message: "Not possible to delete." + req.params.schedulesId        
        });
    });
};






//Deleting shedule of a specific bus from Nouhata routes

exports.deleteMorning = (req,res) => {
    ScheduleShift.findByIdAndRemove (req.params.busNumber)
    .then(schedules => {
        if(!schedules) {
            return res.status(404).send({
                message: "Schedule of the bus is absent from the the database! " + req.params.schedulesId
            });
        }
        res.send({
            message:"Schedule of the bus is deleted from Morning shift."
        });
    }).catch(err => {
        if (err.kind == 'ObjectId') {
            return res.status(404).send({
                message: "Schedule is not found for the bus" + req.params.schedulesId
            });
        }
        return res.status(500).send({
            message: "Not possible to delete." + req.params.schedulesId        
        });
    });
};
