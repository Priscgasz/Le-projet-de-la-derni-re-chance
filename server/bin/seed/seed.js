require("dotenv").config();
require("./../../config/mongo");

const axios = require("axios");
const Tvshows = require("../../models/Tvshows")
const tvshows = require("./tvshows.json")
const mongoose = require("mongoose")

 
// if (!process.env.MONGO_URI) {
//     throw "cannot read MONGO_URI";
//   }

// mongoose
// .connect(process.env.MONGO_URI)
// .then(async (x) => {
//     console.log(`Connection to ${x.connection.name} established.`);
//     for (let i = 0; i < 25; i++) {
//       const id = tvshows.items[i].id;
//       const { data } = await axios.get(
//         // `https://api.punkapi.com/v2/beers/${id}`
//         `https://imdb-api.com/en/API/MostPopularTVs/k_by6fp93n/${id}`
//       );
// await Tvshows.create(data);
// }
// mongoose.disconnect(() => {
//     console.log("disconnected");
//   });
// })
// .catch((error) =>
//   console.log(`An error occured trying to connect to the DB: ${error}`)
// );

 //key API - IMDB
  // Joey: k_by6fp93n
  // Yuki: k_10znj6fx
  // Marc: k_12345678
  // Priscilla: k_p4jvq6vq