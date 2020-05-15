
const express=require('express');
const router=express.Router();

const lugaresController = require('../controllers/lugaresController');




    router.get('/',lugaresController.listaLugares);
    router.get('/:id',lugaresController.unLugar);
    router.post('/',lugaresController.crearLugar);
    router.put('/:id',lugaresController.actualizarLugar);
    router.delete('/:id',lugaresController.eliminarLugar);

module.exports = router;
