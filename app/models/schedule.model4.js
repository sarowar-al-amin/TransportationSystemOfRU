const mongoose = require('mongoose');

const ManpowerAndFinanceSchema = mongoose.Schema({
    annualCost: String,
    studentFarePerYear: String,
    numberOfWorkers: String,
    chiefOfAuthority: String
   },{
        timestamps: true
    });



module.exports = mongoose.model('ManpowerAndFinance',ManpowerAndFinanceSchema);