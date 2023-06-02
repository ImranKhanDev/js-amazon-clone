// const express = require('express')
import express from "express"
// const data = require('./data.js')
import data from "./data.js"
import cors from"cors"
// const cors = require('cors')
const app = express()
app.use(cors());
app.get('/api/products',(req,res)=>{
    res.send(data.products)
})


app.listen(5000,()=>{
    console.log('Server is running on http://localhost:5000');
})