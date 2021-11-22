const connectDatabase = require('./database')
const app = require('./app');

connectDatabase();
const server = app.listen(9999,()=>{
    console.log("Server started on port: 9999 in localhost")
})