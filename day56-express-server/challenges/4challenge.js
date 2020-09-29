const express=require('express')
const app=express()
const port=3065

app.use(express.json())

app.post('/submit_names',(req,res)=>{
    const body=req.body
    const male=body.data.filter(ele=>ele.gender=='male')
    const female=body.data.filter(ele=>ele.gender=='female')
    res.json({male,female,"male_count":male.length,"female_count":female.length})
})
app.post('/segregate_names',(req,res)=>{
    const body=req.body
    const male=body.data.filter(ele=>ele.gender=='male')
    const female=body.data.filter(ele=>ele.gender=='female')
    res.json({"male":male.map(ele=>ele.name),"female":female.map(ele=>ele.name),"male_count":male.length,"female_count":female.length})

})

app.listen(port,()=>{
    console.log('listening port',port)
})