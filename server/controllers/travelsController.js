const travelsDB = require('../models/travelsModel.js');

const travelsController = {};

travelsController.returnAll = async (req, res, next) => {
  try {
    const aT = await travelsDB.find();
    res.locals.allTravels = aT;
    res.sendStatus(200).json(res.locals.allTravels);
    return next();
  } catch(err) {
    return next('Put an err object in here')
  }
}

travelsController.createTrip = async (req, res, next) => {
    try {
        const { location, startDate, endDate, packing_list, itinerary, notes } = req.body;
        const nt = await travelsDB.createONe({location: location, startDate: startDate, endDate: endDate, packing_list: packing_list, itinerary: itinerary, notes: notes});
        res.locals.newTrip = nt;
        res.sendStatus(200).json(res.locals.newTrip);
        return next();
    } catch(err){
        return next('Put an err object in here')
    }
}

travelsController.retrieveTrip = async (req, res, next) => {
  
}

travelsController.updateTrip = async (req, res, next) => {
  
}

travelsController.deleteTrip = async (req, res, next) => {
  
}

module.exports = travelsController;