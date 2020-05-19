
const express=require('express');
const router=express.Router();


const LugaresController = require('../controllers/lugaresController');

/**
 * @module LugaresRoutes
 * @description En este modulo definimos las rutas con express relacionados con los lugares.
 * Las funciones a ejecutar en cada ruta se definen en LugaresController.
 * 
 */

router.get('/',LugaresController.listaLugares);
router.get('/:id',LugaresController.unLugar);
router.post('/',LugaresController.crearLugar);
router.put('/:id',LugaresController.actualizarLugar);
router.delete('/:id',LugaresController.eliminarLugar);


module.exports = router;
