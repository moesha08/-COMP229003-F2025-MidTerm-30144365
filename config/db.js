require('dotenv').config()
const mongoose = require('mongoose');
let ConnectionString = "mongodb+srv://moesha:Sorelle1998@cluster003.7lckf8u.mongodb.net/midterm?retryWrites=true&w=majority&appName=Cluster003"

module.exports = function(){

    mongoose.connect(ConnectionString);

    let mongodb = mongoose.connection;

    mongodb.on('error', console.error.bind(console, 'Connection Error: '));
    mongodb.once('open', ()=>{
        console.log('====> Connected to MongoDB.');
    })

    return mongodb;
}