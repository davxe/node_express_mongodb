const express=require('express')
const app=express()
const port=3072
const configureStore=require('./config/database')
configureStore()

app.use(express.json())

const routes=require('./config/routes')
app.use('/',routes)


app.listen(port,()=>{
    console.log('listining port',port)
})