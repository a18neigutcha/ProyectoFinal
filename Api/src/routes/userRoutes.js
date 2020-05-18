const express=require('express');
const router=express.Router();

const UserController = require('../controllers/userController');

/**
 * @namespace RutasUsuarios
 * @description Rutas de la api para gestionar a los usuarios.
 */
router.post('/signUp',UserController.signUp);
router.post('/signIn',UserController.signIn);

module.exports = router;