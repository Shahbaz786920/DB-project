const express = require('express');
const router = express.Router();
const UserModel = require('../Model/ticketModel')
const ticketbook = require('../DB/data')

router.post('/get',(req,res)=>{
    UserModel.create(ticketbook,(err,data)=>{
        if(!err){
            res.status(200)
            res.json({
                "msg":"Ticket Booked",
                data:data
        })
        }
        else{
            res.status(404)
            res.json("something is wrong")
        }
    })  
})

module.exports = router