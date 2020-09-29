const mongoose=require('mongoose')
const isEmail=require('validator/lib/isEmail')
const Schema=mongoose.Schema
const userSchema=new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        minlength:4,
        maxlength:16
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate:{
            validator:function(value)
            {
                return isEmail(value)
            },
            message:function(){
                return 'invalid email format'
            }
        }
    },
    password:{
        type:String,
        required:true,
        maxlength:64,
        minlength:8
    }
})
const User=mongoose.model('User',userSchema)
module.exports=User