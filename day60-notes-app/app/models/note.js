const mongoose=require('mongoose')
const Schema=mongoose.Schema
const noteSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    category:{
        type:Schema.Types.ObjectId,
        ref:'Category',
        required:true
    },
    createAt:{
        type:Date,
        default:Date.now
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
})

const Note=mongoose.model('Note',noteSchema)

module.exports=Note