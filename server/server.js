const express = require('express');
const apiRouter = require('./routes/api.js');
const travelsController = require('./controllers/travelsController');


const cors = require('cors');
const bodyparser = require('body-parser');
// const cookierParser = require('cookie-parser');
const path = require('path');



const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded( {extended: true} ));
app.use(cors());

//use apiRouter for db requests
app.use('/api', apiRouter);

//create a handlers for all requests to /travels
app.get('/travels', travelsController.returnAll, (req, res) => {
  return res.status(200).json(res.locals.allTravels);
})
//post
app.post('/travels', travelsController.createTrip, (req, res) => {
  return res.status(200).json(res.locals.newTrip);
})

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.sendStatus(404));

//global error handler
app.use((error, req, res, next) => {
    const defaultErr = {
        log: "Express error handler caught unknown middleware error",
        status: 400,
        message: { err: "An error occurred" },
    };
    console.log(error);
    const errorObj = Object.assign(defaultErr, error);
    console.log("error log " + errorObj.log);
    res.locals.message = errorObj.message;
    return res.status(errorObj.status).send(eval(errorObj.message));
});

//start server on localhost:3000
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;