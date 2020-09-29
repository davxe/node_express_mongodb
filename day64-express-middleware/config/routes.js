const express = require('express')
const router=express.Router()
const tasksController=require('../app/controller/tasksController')
//router middleware
const auth=(req,res,next)=>{
    const password=req.query.key
    if(password=='Dct123')
    {
        next()
    }
    else
    {
        res.json({notice:"you are not authorized"})
    }
}

router.get('/tasks',tasksController.list)

router.post('/tasks',auth,tasksController.create)

router.get('/tasks/:id',auth,tasksController.show)

router.put('/tasks/:id',auth,tasksController.update)

router.delete('/tasks/:id',auth,tasksController.destroy)

module.exports=router