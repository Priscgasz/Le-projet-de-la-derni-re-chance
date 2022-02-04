const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GenreSchema = new Schema ({
    name: String,
});

const GenreModel = mongoose.model("category", GenreSchema)
module.exports = GenreModel