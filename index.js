const express = require('express')
const mongoose = require('mongoose')
const mongoDB="mongodb://localhost:27017/db_project"
const UserRouter = require('./Routes/userRoute')

mongoose.set('strictQuery', false);
const app = express()
app.use('/user',UserRouter)

mongoose.connect(mongoDB, (err)=> {
    if(err) {
        console.log("DB is not connected");
    }
    else{
        console.log("DB is connected");
    }
})

app.listen(5000, ()=> {
    console.log("server started...");
})