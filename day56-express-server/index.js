const express=require('express')
const app=express()
const port=3035

const users=[
    {id:1,name:'john'},
    {id:2,name:'jack'},
    {id:3,name:'jacky'}
]

app.use(express.json())

app.get('/',(req,res)=>{
    res.send('welcome to express')
})
app.get('/users',(req,res)=>{
    res.json(users)
})
app.put('/users/update',(req,res)=>{
    res.json({
        "notice":"url - '/users/update httpMethod - put"
    })
})
app.post('/users/register',(req,res)=>{
    const body=req.body
    console.log(body)
    res.json(body)
})

app.delete('/users/logout',(req,res)=>{
    res.json({
        "notice":"'url - '/users/logout  httpmethod - delete"
    })
})
app.get('/users/:id',(req,res)=>{
    const id=req.params.id
    const user=users.find(user=>user.id===parseInt(id))
    if(user)
    {
        res.json(user)
    }
    else
    {
        res.json({})
    }
})
app.listen(port,()=>{
    console.log('listining port',port)
})

