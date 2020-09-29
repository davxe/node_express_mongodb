const express=require('express')
const app=express()
const port=3074

const configureDb=require('./config/database')
configureDb()
const routes=require('./config/routes')
app.use(express.json())
app.use('/',routes)

app.listen(port,()=>{
    console.log('listening to port no',port)
})