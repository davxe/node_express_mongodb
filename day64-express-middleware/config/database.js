const mongoose = require('mongoose') 

const configureDB = () => {
    mongoose.connect('mongodb://localhost:27017/jan-tasks-express-middleware', { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('connected to db')
        })
        .catch((err) => {
            console.log('error', err)
        })
}

module.exports = configureDB