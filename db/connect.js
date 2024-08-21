const mongoose = require('mongoose');

// const uri = "mongodb+srv://krushnaApi:api123@cluster0.eiywq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";



const connectDB = (uri) =>{
    console.log("he");
    
    return mongoose.connect(uri)
}

module.exports = connectDB