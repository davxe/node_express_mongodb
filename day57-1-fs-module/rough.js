const express=require('express')
const mongoose=require('mongoose')
const app=express()
const port=3070

app.use(express.json())

mongoose.connect('mongodb://localhost:27017/taskdb')
    .then(()=>{
        console.log('successfully connected mongodb')
    })
    .catch((err)=>{
        console.log(err)
    })

const Schema=mongoose.Schema
const taskSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    completed:{
        type:Boolean,
        default:false
    },
    description:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    dueDate:{
        type:Date
    }
})

const Task=mongoose.model('Task',taskSchema)

app.post('/tasks',(req,res)=>{
    const body=req.body
    const task=new Task(body)
    //or
    // task.title=body.title
    // task.description=body.description
    task.save()
        .then((task)=>{
            res.json(task)
        })
        .catch((err)=>{
            res.json(err)
        })
})

app.get('/tasks',(req,res)=>{
    Task.find()
        .then((task)=>{
            res.json(task)
        })
        .catch((err)=>{
            res.json(err)
        })
})

app.get('/tasks/:id',(req,res)=>{
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
    Task.findByIdAndUpdate(id,body,{new:true})
        .then((task)=>{
            res.json(task)
        })
        .catch((err)=>{
            res.json(err)
        })
})

app.listen(port,()=>{
    console.log('listening port',port)
})