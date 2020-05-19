const express=require('express');
const router=express.Router();

const UserController = require('../controllers/userController');

/**
 * @module UserRoutes
 * @description En este modulo definimos las rutas con express relacionados con la gention de usuarios.
 * Las funciones a ejecutar en cada ruta se definen en UserController.
 * 
 */
router.post('/signUp',UserController.signUp);
router.post('/signIn',UserController.signIn);

module.exports = router;