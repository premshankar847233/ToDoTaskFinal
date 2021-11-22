const express = require('express');
const bodyparser = require('body-parser')



const app = express();
app.use(express.json());
// app.use(express.bodyparser())
app.use(bodyparser.urlencoded({extended:true}))

const addtask = require('./todoroutes')
app.use('/api/v1',addtask)

module.exports = app;