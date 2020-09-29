const express = require('express')
const router=express.Router()
const categoriesController=require('../app/controllers/categoriesController')
const notesController=require('../app/controllers/notesController')

const multer=require('multer')
const storage=multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        cb(null , file.originalname);
    }
});
const upload=multer({ storage: storage })







router.post('/notes',upload.array('profiles',4),notesController.create)

router.get('/categories',categoriesController.list)

router.post('/categories',categoriesController.create)

router.get('/categories/:id',categoriesController.show)

router.put('/categories/:id',categoriesController.update)

router.delete('/categories/:id',categoriesController.destroy)

router.get('/notes',notesController.list)

router.get('/notes/:id',notesController.show)

router.put('/notes/:id',notesController.update)

router.delete('/notes/:id',notesController.destroy)

module.exports=router