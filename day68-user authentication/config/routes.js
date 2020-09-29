const express=require('express')
const router=express.Router()
const usersController=require('../app/controllers/usersController')
const {authenticateUser}=require('../app/middlewares/authenticateUser')
router.post('/users/register',usersController.register)
router.post('/users/login',usersController.login)
router.get('/users/accounts',authenticateUser,usersController.account)
module.exports=router