const express=require('express')
const app=express()
const port=3050
const names=['john','andrew','zesus','donna','emma']
app.get('/names',(req,res)=>{
    const sorts=req.query.sort
    if(req.url=='/names')
    {
        res.json({'names':names})
    }
    else if(sorts=='asc')
    {
        res.json({'ascending order names':names.sort()})
    }
    else if(sorts=='desc')
    {
        res.json({'descending order names':names.reverse()})
    }
    else
    {
        res.json({"previous name":names})
    }
})
app.listen(port,()=>{
    console.log('listining port',port)
})