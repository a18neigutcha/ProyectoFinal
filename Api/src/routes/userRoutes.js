const express=require('express');
const router=express.Router();

const UserController = require('../controllers/userController');

const verifyToken = require('../verifyToken');

/**
 * @file userRoutes.js
 * @descriptio En este fichero se definen las rutas que respondera nuestra api relacionadas con los usuarios.
 * 
 */


/**
 * @module UserRoutes
 * @description En este modulo definimos las rutas con express relacionados con la gention de usuarios.
 * Las funciones a ejecutar en cada ruta se definen en UserController.
 * 
 */
router.post('/signUp',UserController.signUp);
router.post('/signIn',UserController.signIn);


/**
 * Lad funciones en este apartado requieren autentificacón por medio de jsontoken.
 */

router.get('/sesion/me',verifyToken,UserController.me);
router.put('/sesion/me',verifyToken,UserController.updateUser);

module.exports = router;