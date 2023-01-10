// const mongoose = require('mongoose');
//  //enter string here or use .env
// const MONGO_URI = 'mongodb+srv://mcbrownc:<password>@cluster0.5tudok3.mongodb.net/?retryWrites=true&w=majority';


// mongoose
//     .connect(MONGO_URI, {
//         // options for the connect method to parse the URI
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         // sets the name of the DB that our collections are part of
//         dbName: 'TravelsDB',
//     })
//     .then(() => console.log('Connected to Mongo DB.'))
//     .catch((err) => console.log(err));

//     const travelSchema = new mongoose.Schema({
//       location: { type: String, required: true},
//         //etc etc...
//   });

//   module.exports = mongoose.model('Travels', travelSchema);