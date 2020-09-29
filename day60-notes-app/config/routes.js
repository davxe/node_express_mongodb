const express = require('express')
const router=express.Router()
const categoriesController=require('../app/controllers/categoriesController')
const notesController=require('../app/controllers/notesController')
const usersController=require('../app/controllers/usersController')
const {authenticateUser}=require('../app/middleware/authenticateUser')

router.post('/users/register',usersController.register)

router.post('/users/login',usersController.login)

router.get('/users/accounts',authenticateUser,usersController.account)

router.get('/categories',authenticateUser,categoriesController.list)

router.post('/categories',authenticateUser,categoriesController.create)

router.get('/categories/:id',authenticateUser,categoriesController.show)

router.put('/categories/:id',authenticateUser,categoriesController.update)

router.delete('/categories/:id',authenticateUser,categoriesController.destroy)

router.get('/notes',authenticateUser,notesController.list)

router.post('/notes',authenticateUser,notesController.create)

router.get('/notes/:id',authenticateUser,notesController.show)

router.put('/notes/:id',authenticateUser,notesController.update)

router.delete('/notes/:id',authenticateUser,notesController.destroy)

module.exports=router