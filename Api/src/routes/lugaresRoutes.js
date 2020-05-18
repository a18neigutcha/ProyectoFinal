
const express=require('express');
const router=express.Router();


const LugaresController = require('../controllers/lugaresController');

/**
 * @namespace RutasLugares
 * @description Rutas de la api para peticiones de los lugares.
 * 
 */

router.get('/',LugaresController.listaLugares);
router.get('/:id',LugaresController.unLugar);
router.post('/',LugaresController.crearLugar);
router.put('/:id',LugaresController.actualizarLugar);
router.delete('/:id',LugaresController.eliminarLugar);


module.exports = router;
