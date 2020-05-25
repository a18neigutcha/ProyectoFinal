const mysqlConnection = require('../database');

/**
 * 
 * @static LugaresControlle
 * @description En esta clase de definen las funciones que responden a las peticiones de la API
 * relacionandas con los Lugares.
 * 
 */

class LugaresController {

    /**
     * @method listaLugares
     * @description Lista de todos los lugares, peticion GET.
     * 
     * @param {Array} res Nos retorna un array con todos los lugares registrados.
     */ 
        
    static async listaLugares(req,res){


        await mysqlConnection.query('SELECT * FROM LUGAR',(err,result,fields)=>{
            if(!err){
                res.json(result);
            }else{
                console.log(err);
            }
        });
    }


    /**
     * @method unLugar
     * @description Datos de un lugar especifico, peticion GET.
     * @param {int} req la id del lugar solicitado 
     * @param {*} res 
     */

    static async unLugar(req,res){
        const {id} = req.params;
        await mysqlConnection.query('SELECT * FROM LUGAR WHERE id=?',[id], function(err, result, fields) {
            if (err){
                console.log(err);
            }else if(result.length>0){
                res.json(result[0]);
            }else{
                res.status(404).json({text:"El lugar no existe"});
            }
        });
    }

    /**
     * @method crearLugar
     * @description Inserta un lugar a nuestra base de datos, peticion POST
     * @param {Json} req Json con los datos del lugar.
     * @param {Json} res Json con mensaje de confimación.  
     */

   static async crearLugar(req,res){

    const pathImg = 'http://localhost:3000/img/'+req.file.filename;
    console.log(pathImg);
    const{titulo,direccion,descripcion,latitud,longitud,userId} = req.body;
    console.log(req.userId);
    
    await mysqlConnection.query(
        `INSERT INTO LUGAR (titulo,direccion,descripcion,latitud,longitud,imagen,userId) VALUES (?,?,?,?,?,?,?)`,
        [
            titulo,
            direccion,
            descripcion,
            latitud,
            longitud,
            pathImg,
            req.userId
        ]);

    res.json({text:'Lugar registrado'});

   }



    /**
     * @method actualizarLugar
     * @description Actualiza los datos de un lugar, peticion PUT
     * @param {Json} req Json con los datos del lugar.
     * @param {Json} res Json con mensaje de confirmación. 
     */

   static async actualizarLugar(req,res){
        console.log(req.body);
       // await pool.query('UPDATE LUGAR set ? WHERE id = ?',[req.body,id]);
        res.json({text:'Lugar actualizado'});
   }

   /**
    * @method valoraLugar
    * @param {*} req 
    * @param {*} res 
    */
   static async valoraLugar(req,res){
        const {valoracion} = req.body;
        const lugarId=req.params.id;
        console.log(valoracion);
        console.log(lugarId);
        await mysqlConnection.query('UPDATE LUGAR set valoracion=? WHERE id = ?',[valoracion,lugarId],(err,result,fields)=>{
            if(err){
                console.log(err);
                res.status(500).json({text:"Error al hacer la valoración."});
            }else{
                console.log(result);
                res.status(200).json({text:"Lugar actualizado"});
            }
        });
    }
   /**
    * @method eliminarLugar
    * @description Elimina un lugar.
    * @param {int} req La id del lugar a aliminar. 
    * @param {Json} res Json con mensaje de confirmacion. 
    */

    static async eliminarLugar(req,res){
        const {id} = req.params;
        await pool.query('DELETE FROM LUGAR WHERE id=?',[id]);
        res.json({text:'Lugar elimina.'});
    }

    /**
     * @method listaPorUsuario
     * @param {int} req id del usuario.
     * @param {Json} res Lista de lugares del usuario. 
     */
    static async listaPorUsuario(req,res){
        
        console.log(req.userId);
        await mysqlConnection.query('SELECT * FROM LUGAR WHERE userId = ? ',[req.userId],(err,result,fields)=>{
            
            if(err){
                console.log(err);
            }else{
                console.log(result);
                res.status(200).json(result);
            }
            
        }); 
    }
}


module.exports = LugaresController;
