
const express=require('express');
const router=express.Router();
const LugaresController = require('../controllers/lugaresController');
const verifyToken = require('../verifyToken');

/**
 * @file lugaresRoutes.js
 * @descriptio En este fichero se definen las rutas las cuales respondera nuestra api 
 * relacionadas con los lugares.
 */


/**
 * @module LugaresRoutes
 * @description En este modulo definimos las rutas con express relacionados con los lugares.
 * 
 * Las funciones a ejecutar en cada ruta se definen en LugaresController.
 * 
 */

router.get('/',LugaresController.listaLugares);
router.get('/:id',LugaresController.unLugar);
router.delete('/:id',LugaresController.eliminarLugar);

/**
 * Lad funciones en este apartado requieren autentificacón por medio de jsontoken.
 */

router.get('/user/lugares',verifyToken,LugaresController.listaPorUsuario);
router.post('/',verifyToken,LugaresController.crearLugar);
router.put('/:id',verifyToken,LugaresController.actualizarLugar);
router.put('/valoracion/:id',verifyToken,LugaresController.valoraLugar);


module.exports = router;
