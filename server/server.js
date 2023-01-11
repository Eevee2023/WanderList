const express = require('express');
const apiRouter = require('./routes/api.js');

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded( {extended: true} ));


//use apiRouter for db requests
app.use('/api', apiRouter);

//create a handler for get requests to /travels
app.get('/travels', (req, res) => {

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