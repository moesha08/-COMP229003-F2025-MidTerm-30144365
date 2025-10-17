require('dotenv').config()
const mongoose = require('mongoose');

let ConnectionString = process.env.MONGODB_URI || "mongodb+srv://moesha:Sorelle1998@cluster003.7lckf8u.mongodb.net/midterm?retryWrites=true&w=majority&appName=Cluster003";

module.exports = function(){
    mongoose.connect(ConnectionString)
        .then(() => {
            console.log('====> Connected to MongoDB.');
        })
        .catch(err => {
            console.log('MongoDB Connection Warning:', err.message);
            console.log('Server will continue running without database...');
        });

    let mongodb = mongoose.connection;

    mongodb.on('error', (error) => {
        console.log('MongoDB Connection Error:', error.message);
        console.log('Server continues running...');
    });
    
    mongodb.once('open', ()=>{
        console.log('====> Connected to MongoDB.');
    });

    return mongodb;
}