const mongoose = require('mongoose');
 //enter string here or use .env
const MONGO_URI = 'mongodb+srv://teameevee:thegoat@cluster0.wvcjctj.mongodb.net/?retryWrites=true&w=majority';


mongoose
    .connect(MONGO_URI, {
        // options for the connect method to parse the URI
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // sets the name of the DB that our collections are part of
        dbName: 'TravelsDB',
    })
    .then(() => console.log('Connected to Mongo DB.'))
    .catch((err) => console.log(err));

const TravelSchema = new mongoose.Schema({
    location: {
      type: String,
      required: true
    },
    startDate: {
      type: Date,
      required: true
    },
    endDate: {
      type: Date,
      required: true
    },
    packing_list: {
      type: Array,
      required: false
    },
    itinerary: {
      type: Array,
      required: false,
    },
    notes: {
      type: Array,
      required: false
    }
});








// {
//   user: username,
//   password: password,
//   trips: {
//     trip1: {
//       location: City,
//       startDate: Date,
//       endDate: Date,
//       packing list: [Array of items to pack],
//       itinerary: [Array in order of what to do],
//       notes: [Array of notes]
//     },
//     trip2: {
//       location: City,
//       startDate: Date,
//       endDate: Date,
//       packing list: [Array of items to pack],
//       itinerary: [Array in order of what to do],
//       notes: [Array of notes]
//     },
//   }
// }

module.exports = mongoose.model('Travel', TravelSchema);
