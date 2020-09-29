const mongoose=require('mongoose')

const configureDB=()=>{
    // console.log('congig db ')
    mongoose.connect('mongodb://localhost:27017/jan-notes-app-employees',{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{
        console.log('connected to db')
    })
    .catch((err)=>{
        console.log(err)
    })
}
module.exports = configureDB