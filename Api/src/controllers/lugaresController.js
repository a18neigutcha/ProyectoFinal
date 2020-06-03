const mysqlConnection =require('../database');

/**
 * @file lugaresController.js
 * 
 * @description Fichero donde se definen las funciones relacionadas con los lugares.
 * 
 */

/**
 * 
 * @static LugaresController
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
                res.status(500).json({text:"No se puedo mostrar la lista de lugares"});
            }
        });
    }


    /**
     * @method unLugar
     * @description Datos de un lugar especifico, peticion GET.
     * @param {int} req la id del lugar solicitado 
     * @param {Json} res los datos del lugar buscado si existe o un mensaje de error si no existe o hubo algun problema 
     */

    static async unLugar(req,res){
        const {id} = req.params;
        await mysqlConnection.query('SELECT * FROM LUGAR WHERE id=?',[id], function(err, result, fields) {
            if (err){
                console.log(err);
                res.status(500).json({text:"No pudo mostrar datos del lugar."})
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
     * @param {FormData} req Form(Formulario) con los datos del lugar.
     * @param {Json} res Json con mensaje de confimación o uno de error si algo falla.
     * 
     * Tomar en cuenta que las imagenes se guardaran en el servidor en la base de datos solo se guardar la url de la imagen accessible desde el servidor.
     */

   static async crearLugar(req,res){

    const pathImg = 'http://barcelonadesconocida.tk:3000/img/'+req.file.filename;
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
        ],(err, result, fields)=>{

            if(err){
                res.status(500).json({ text:"No se puedo registrar el lugar"});
            }else{
                res.json({text:'Lugar registrado'});
            }

            
        });

    

   }



    /**
     * @method actualizarLugar
     * @description Actualiza los datos de un lugar, peticion PUT
     * @param {FormData} req Form(Formulario) con los datos del lugar.
     * @param {Json} res Json con mensaje de confirmación. 
     * 
     * La imagen previamente guardada no se elimina, se guarda la nueva imagen y se actualiza la url del lugar en la base de datos.
     * 
     */

   static async actualizarLugar(req,res){
        let pathImg = "";
        if(req.file){
             pathImg= 'http://barcelonadesconocida.tk:3000/img/'+req.file.filename;
        }else{
             pathImg = req.body.imagen;
            
        }
        console.log(pathImg);
        const{titulo,direccion,descripcion,latitud,longitud,userId} = req.body;
        const lugarId=req.params.id;
        console.log(lugarId);
        await mysqlConnection.query('UPDATE LUGAR set titulo=?,direccion=?,descripcion=?,latitud=?,longitud=?,imagen=? WHERE id = ?',
            [
                titulo,
                direccion,
                descripcion,
                latitud,
                longitud,
                pathImg,
                lugarId
            ],
        (err,result,fields)=>{
            if(err){
                console.log(err);
                res.status(500).json({text:"Error al actualizar el lugar."});
            }else{
                console.log(result);
                res.status(200).json({text:"Lugar actualizado"});
            }
        });
   }

   /**
    * @method valoraLugar
    * 
    * @description Nos permite valorar un lugar, tomar en cuenta que debemos estar autenticados.
    * 
    * @param {Json,int} req Requiere un Json en el body con la valoracion nueva y en la url el id del lugar valorado.
    * @param {Json} res Un mensaje de confirmacion o uno de error si algo falla.
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
    * @param {int} req La id del lugar a aliminar en la URL 
    * @param {Json} res Json con mensaje de confirmacion. 
    */

    static async eliminarLugar(req,res){
        const {id} = req.params;
        await mysqlConnection.query('DELETE FROM LUGAR WHERE id=?',[id],(err,result,fields)=>{
            if(err){
                console.log(err);
                res.status(500).json({text:"No se pudo borrar la actividad"});
            }else{
                console.log(result);
                res.json({text:'Lugar elimina.'});
            }
        });
        
    }

    /**
     * @method listaPorUsuario
     * @description Nos lista los lugares de un usuario determinado, este methodo requiere autentificasion el cual nos muestra la id del usuario que esta solicitando la lista.
     * @param {int} req id del usuario.
     * @param {Json} res Lista de lugares del usuario. 
     */
    static async listaPorUsuario(req,res){
        
        console.log(req.userId);
        await mysqlConnection.query('SELECT * FROM LUGAR WHERE userId = ? ',[req.userId],(err,result,fields)=>{
            
            if(err){
                console.log(err);
                res.status(500).json({text:"No se puedo mostrar los lugares del usuario"});
            }else{
                console.log(result);
                res.status(200).json(result);
            }
            
        }); 
    }
}


module.exports = LugaresController;
