const { default: mongoose, model } = require("mongoose");

// const  mongoose = require('mongoose');

const storyShema = new mongoose.Schema({
    emojiSequence : {type:[string] ,required: true},
    translation : {type:[string] ,required: true},
    autherNickName : {type:[string] ,default: 'Annonymous'},
    likes : {type:Number ,  default: 0},
    createdAt : {type:Date ,  default: DataTransfer.now }, 


})

model.export = mongoose.model('Story', storyShema) ;