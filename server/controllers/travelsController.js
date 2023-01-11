const Travel = require('../models/travelsModel.js');

const travelsController = {};

travelsController.returnAll = async (req, res, next) => {
  try {
    const result = await Travel.find({});
    console.log('in get request')
    res.locals.allTravels = result;
    return next();
  } catch(err) {
    return next('Error in travelsController.returnAll. Put an err object in here')
  }
}

travelsController.createTrip = async (req, res, next) => {
    try {
        const { location, startDate, endDate, packing_list, itinerary, notes } = req.body;
        console.log(location, 'test location');
        const result = await Travel.create({ location, startDate, endDate, packing_list, itinerary, notes });
        console.log(result,'createTrip travels method');
        res.locals.newTrip = result;
        return next();
    } catch(err){
        return next('Error in travelsController.createTrip. Put an err object in here')
    }
}

travelsController.retrieveTrip = async (req, res, next) => {
  
}

travelsController.updateTrip = async (req, res, next) => {
  
}

travelsController.deleteTrip = async (req, res, next) => {
  try {
    const { _id } = req.body;
    console.log(_id);
    const result = await Travel.deleteMany({});
    res.local.deletedTrip = result;
    return next();
  } catch(err){
    return next('Error in travelsController.deleteTrip. Put an err object in here')
  }
}

module.exports = travelsController;