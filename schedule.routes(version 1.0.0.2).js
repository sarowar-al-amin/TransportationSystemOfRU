module.exports = (app) =>{
    const schedule = require('../controllers/schedule.controller.js');//use to send request to controller
   

    //Create a new bus schedule 
    app.post('/schedule',schedule.create);
    //Create a new schedule for bazar
    app.post('/schedule/bazar',schedule.createBazar);
    //Create a new schedule for Nouhata
    app.post('/schedule/nouhata',schedule.createNouhata);
    //morning schedule create
    app.post('/schedule/morning',schedule.createMorning);
    


    //Create a new manpower and finance 
    app.post('/manpower_finance',schedule.createManAndFin);





    //Retrieve all bus schedule
    app.get('/schedule',schedule.findAll);
    //Retrive all bus schedule for Bazar
    app.get('/schedule/bazar',schedule.findAllBazar);
    //Retrive all bus schedule of Nouhata
    app.get('/schedule/nouhata',schedule.findAllNouhata);
    //Retirieve all bus in the Morning schedule
    app.get('/schedule/morning',schedule.findAllMorning);



    //Retrive the information of man power and finance
    app.get('/manpower_finance',schedule.findManpowerAndFinance);





    //Retrieve one bus schedule 
    app.get('/schedule/:busNumber',schedule.findOne);
    //Retrive one bus schedule for Bazar
    app.get('/schedule/bazar/:busNumber',schedule.findOneBazar);
    //Retrieve one bus info from nouhata 
    app.get('/schedule/nouhata/:busNumber',schedule.findOneNouhata);
    // Retrive one specific bus information from morning shift
    app.get('/schedule/morning/:busNumber',schedule.findOneMorning);




    //Update a bus schedule with bus number
    app.put('/schedule/:busNumber',schedule.update);
    //Update a bus schedule of BaZar
    app.put('/schedule/bazar/:busNumber',schedule.updateBazar);
    //Update a bus schedule of Nouhata
    app.put('/schedule/nouhata/:busNumber',schedule.updateNouhata);
    //Update a bus information of morning shift
    app.put('/schedule/morning/:busNumber',schedule.updateMorning);



   //put method for updating manpower and finance information 
   app.put('/manpower_finance/:annualCost',schedule.updateManpowerAndFinance);




    //Delete a bus's schedule from the schedule list of buses
    app.delete('/schedule/:busNumber',schedule.delete);
    //Delete a bus schedule from the Bazar list
    app.delete('/schedule/bazar/:busNumber',schedule.deleteBazar);
    //Delete a bus schedule from Nouhata route
    app.delete('/schedule/nouhata/:busNumber',schedule.deleteNouhat);
    //Delete a bus information from morning shift
    app.delete('/schedule/morning/:busNumber',schedule.deleteMorning);


   //Delete manpower and finance informatiom
   app.delete('/manpower_finance/:annualCost',schedule.deleteManpowerAndFinance);

}
