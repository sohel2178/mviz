const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
 category:{
     type: mongoose.Schema.Types.ObjectId,
    ref:'Category'},
 file_size:{
     type:String
 },
 imdb_rating:{
     type:String
 },
 video_quality:{
     type:String
 },
 file_type:{
     type:String
 },
 play_time:{
     type:String
 },
 release_date:{
     type:String
 },
 language:{
     type:String
 },
 views:{
     type:Number
 },
 downloaded:{
     type:Number
 },
 title:{
     type:String
 },
image_url:{
    type:String
},
description:{
    type:String
},
video_url:{
    type:String 
},
is_popular:{
    type:Boolean,
    default:false
},
is_featured:{
    type:Boolean,
    default:false
}
});

const Movie = mongoose.model('Movie',MovieSchema);
module.exports = Movie;