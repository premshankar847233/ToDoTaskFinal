const mongoose = require('mongoose');
const workSchema = new mongoose.Schema({

    name:{
        type:String,
        required:[true,'Please enter the details first']
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('works',workSchema);