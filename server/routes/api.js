const express = require('express');
const travelsController = require('../controllers/travelsController.js')
const router = express.Router();


router.get('/createTrip',
  // travelsController.createTrip,
  (req, res) => {
    return res.status(200).send('test');
  }
)

router.get('/retrieveTrip',
  travelsController.retrieveTrip,
  (req, res) => {
    return res.status(200).send(res.locals.tripData);
  }
)

router.get('/createTrip',
  travelsController.createTrip,
  (req, res) => {
    return res.status(200);
  }
)

router.patch('/updateTrip',
  travelsController.updateTrip,
  (req, res) => {
    return res.status(200);
  }
)

router.delete('/deleteTrip',
  travelsController.deleteTrip,
  (req, res) => {
    return res.status(200);
  }
)

module.exports = router;