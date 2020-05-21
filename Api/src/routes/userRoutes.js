const express=require('express');
const router=express.Router();

const UserController = require('../controllers/userController');

const verifyToken = require('../verifyToken');

/**
 * @module UserRoutes
 * @description En este modulo definimos las rutas con express relacionados con la gention de usuarios.
 * Las funciones a ejecutar en cada ruta se definen en UserController.
 * 
 */
router.post('/signUp',UserController.signUp);
router.post('/signIn',UserController.signIn);
router.get('/sesion/me',verifyToken,UserController.me);

module.exports = router;