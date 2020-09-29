const express = require('express')
const moment = require('moment')
const app=express()
const port=3045
app.get('/date/default',(req,res)=>{
    res.json({"date":moment().format()})
})
app.get("/date/today",(req,res)=>{
    res.json({"date":moment().format('LL')})
})
app.get("/date/yesterday",(req,res)=>{
    res.json({"date":moment().subtract(1, 'days').format('LL')})
})
app.get('/date/tomorrow',(req,res)=>{
    res.json({"date":moment().add(1,'days').format('LL')})
})
app.get(`/date/future`,(req,res)=>{
    const day=req.query.days
    console.log('days = ',day)
    res.json({"date":moment().add(day,'days').format('LL')})
})
app.get('/date/today/day',(req,res)=>{
    res.json({"day":moment().format('dddd')})
})

app.listen(port,()=>{
    console.log('listining port',port)
})