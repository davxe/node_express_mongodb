const express = require('express')
const app=express()
const fs=require('fs')
const port=3060
app.use(express.json())
app.post('/submit',(req,res)=>{
    const body=req.body
    console.log(body)
    // res.json("submitted successfully")
    res.json({"total_items":body.item.length})
})
app.post('/register',(req,res)=>{
    const body=req.body
    res.json({"total_fields":Object.keys(body).length})
})

app.listen(port,()=>{
    console.log('listening port',port)
})