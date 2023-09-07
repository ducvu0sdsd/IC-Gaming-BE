

const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const Mod = new Schema({
    title: {type : String},
    originGame : {type : String},
    criteria : {type : String},
    images : {type : [String]},
    video : {type : String},
    description : {type : String},
    downloads : {type : Number, default : 0},
    views : {type : Number, default : 0},
    likes : {type : Number, default : 0},
    linkDownload : {type : [String]}
},{timestamps : true});

module.exports = mongoose.model('mods', Mod)