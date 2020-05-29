
const express=require('express');
const router=express.Router();


const LugaresController = require('../controllers/lugaresController');

const verifyToken = require('../verifyToken');

/**
 * @module LugaresRoutes
 * @description En este modulo definimos las rutas con express relacionados con los lugares.
 * Las funciones a ejecutar en cada ruta se definen en LugaresController.
 * 
 */

router.get('/',LugaresController.listaLugares);
router.get('/:id',LugaresController.unLugar);
router.post('/',verifyToken,LugaresController.crearLugar);
router.put('/:id',verifyToken,LugaresController.actualizarLugar);
router.put('/valoracion/:id',verifyToken,LugaresController.valoraLugar);
router.delete('/:id',LugaresController.eliminarLugar);

/**
 * @description Para ejecutar esta ruta es necesario un token de autenticacion.
 */

router.get('/user/lugares',verifyToken,LugaresController.listaPorUsuario);


module.exports = router;
