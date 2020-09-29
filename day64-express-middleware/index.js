const express=require('express')
const app=express()
const port=3072

const configureDB=require('./config/database')
configureDB()

app.use(express.json())
//application middleware
app.use(function(req,res,next){
    console.log(`ip is - ${req.ip}, url is - ${req.url}  post data - ${JSON.stringify(req.body)}`)
    next()
})

const routes=require('./config/routes')
app.use('/',routes)

app.listen(port,()=>{
    console.log('listening port',port)
})