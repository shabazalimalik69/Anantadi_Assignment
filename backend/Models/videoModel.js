const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
    name:{type:String},
    videos:[{type:String}]
},{timestamps:true});

const Video = mongoose.model("Video",videoSchema);

module.exports = Video;