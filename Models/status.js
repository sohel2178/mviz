const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StatusSchema = new Schema({
 status:{
     type:String 
 },
 is_active:{
    type:Boolean,
    default:false
 }
 

});

const Status = mongoose.model('Status',StatusSchema);
module.exports = Status;