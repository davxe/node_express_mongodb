const express=require('express')//npm install express
const mongoose=require('mongoose')//npm install mongoose
const app=express()
const port=3035

app.use(express.json())

//2. step to coonect the mongodb database
mongoose.connect('mongodb://localhost:27017/jan-db')
.then(()=>{
    console.log('connected to db')
})
.catch((err)=>{
    console.log('err',err)
})
//3. step to create a schema
const Schema=mongoose.Schema
//4. create a constructor of Schema
const taskSchema=new Schema({
title:{
    type:String,
    required:true
},
completed:{
    type:Boolean,
    default:false
},
dueDate:{
    type:Date
},
createAt:{
    type:Date,
    default:Date.now
}
})
//5. step is to create a model
const Task=mongoose.model('Task',taskSchema)

app.get('/tasks',(req,res)=>{
    Task.find()
        .then((Task)=>{
            res.json(Task)
        })
        .catch((err)=>{
            res.json(err)
        })
})

app.post('/tasks',(req,res)=>{
    const body=req.body
    const task=new Task(body)
            task.save()
                .then((task)=>{
                    res.json(task)
                })
                .catch((err)=>{
                    res.json(err)
                })

})
app.get('/tasks:id',(req,res)=>{
    const id=req.params.id
    Task.findById(id)
        .then((task)=>{
            res.json(task)
        })
        .catch((err)=>{
            res.json(err)
        })
})

app.delete('/tasks/:id',(req,res)=>{
    const id=req.params.id
    Task.findByIdAndDelete(id)
        .then((task)=>{
            res.json(task)
        })
        .catch((err)=>{
            res.json(err)
        })
})

app.put('/tasks/:id',(req,res)=>{
    const id=req.params.id
    const body=req.body
    Task.findByIdAndUpdate(id,body,{new:true,runValidators:true})
        .then((task)=>{
            res.json(task)
        })
        .catch((err)=>{
            res.json(err)
        })
})

app.listen(port,()=>{
    console.log('listining port',port)
})
 
