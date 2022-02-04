    const mongoose = require("mongoose");
    const Schema = mongoose.Schema;

    const TvshowsSchema = new Schema({
    title: String,
    year:Date,
    image: String,
    crew: String,
    imDbRating: String,
    genre: String,
    id_genre: [{ type: Schema.Types.ObjectId, ref: "genre" }],
});

    const TvshowsModel = mongoose.model("tvshow", TvshowsSchema);

    module.exports = TvshowsModel
    
    