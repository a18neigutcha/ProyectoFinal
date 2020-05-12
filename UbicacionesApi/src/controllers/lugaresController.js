const mysqlConnection = require('../database');

class GamesController {

    /* 
        Lista de todos los lugares
    */
    async listaLugares(req,res){
        await mysqlConnection.query('SELECT * FROM LUGAR',(err,result,fields)=>{
            if(!err){
                res.json(result);
            }else{
                console.log(err);
            }
        });
    }

    /* 
        Datos de un lugar especifico
    */

    async unLugar(req,res){
        const {id} = req.params;
        await mysqlConnection.query('SELECT * FROM LUGAR WHERE id=?',[id], function(err, result, fields) {
            if (err){
                console.log(err);
            }else if(result.length>0){
                res.json(result[0]);
            }else{
                res.status(404).json({text:"The game doesn't exists"});
            }
        });
    }

    /* 
        Insertar un nuevo lugar
    */
   async crearLugar(req,res){

    await mysqlConnection.query('INSERT INTO LUGAR set ?',[req.body]);
    res.json({text:'Game saved'});

   }

    /* 
        Actualiza datos de un lugar
    */

   async actualizarLugar(req,res){
    const {id} = req.params;
    await pool.query('UPDATE LUGAR set ? WHERE id = ?',[req.body,id]);
    res.json({text:'The game was updated'});
   }

   /* 
        Elimina un lugar
   */

    async eliminarLugar(req,res){
        const {id} = req.params;
        await pool.query('DELETE FROM LUGAR WHERE id=?',[id]);
        res.json({text:'The game was deleted'});
    }
}


lugaresController = new GamesController();

module.exports = lugaresController;
