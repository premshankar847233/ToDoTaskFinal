const mongoose = require('mongoose');

const connectDatabase = ()=>{

    mongoose.connect("mongodb://localhost:27017/TODO",{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(con=>{
            console.log(`MongoDB database connected with HOST: ${con.connection.host}`)
        })
}

module.exports = connectDatabase