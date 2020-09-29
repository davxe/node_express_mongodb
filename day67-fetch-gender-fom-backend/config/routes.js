const express = require('express')
const router=express.Router()
const employeesController=require('../app/controllers/employeesController')
router.get('/employees',employeesController.list)

router.post('/employees',employeesController.create)

module.exports=router