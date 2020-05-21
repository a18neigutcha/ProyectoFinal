const mysqlConnection = require('../database');
const config = require('../config');
const verifyToken = require('../verifyToken');

const jwt = require('jsonwebtoken');

const User = require ('../model/User');

/**
 * @static UserController
 * @description En esta clase se definen las funciones que reciben y responden
 * a las peticiones de la API relacionadas con los Usuarios.
 * 
 */
class UserController{

    /**
     * @method signUp
     * @description Este metodo nos permite dar de alta a los usuarios
     * 
     * @param {Body} req Es una peticion tipo POST y recibe los parametros de {id,userName,email,password}
     * @param {JsonWebKey} res Responde un Json con un token de autenticacion.
     */

    static async signUp(req,res){
        try{
            // Receiving Data

            const user = {userName,email,password} = req.body;
            
            console.log(user);

            password = await User.encryptPassword(password);

            console.log("Password encryptado: "+ password);

            
            //Save with mysql
            await mysqlConnection.query('INSERT INTO USUARIO () set ?',[req.body]);

            const userId = await mysqlConnection.query('SELECT id FROM USUARIO WHERE email = ? ',[req.body.email]);

            console.log("User id".userId);

            // Create a Token
            const token = jwt.sign({ id: userId }, config.secret, {
                expiresIn: 60 * 60 * 24 // expires in 24 hours
            });

            res.json({ auth: true, token });
        } catch (e) {

            console.log(e);
            res.status(500).send('No se pudo registrar el usuario');
        }

    }

    /**
     * @method signIn
     * @description Este metodo nos permite autentificar un usuario que quiere iniciar session
     * 
     * @param {Body} req Peticion POST con los datos {email,password}
     * @param {JsonWebKey} res Responde un Json con un token de autenticacion.
     */

    static async signIn(req, res){

        await mysqlConnection.query('SELECT * FROM USUARIO WHERE email=?',[req.body.email],async (err, result, fields)=>{
            if (err){
                console.log(err);
                res.status(500);
            }
            if(result.length>0){


                const validPassword = await User.comparePassword(result[0].password,req.body.password);
                console.log("password valido: ",validPassword);
                if (!validPassword) {
                    res.status(401).json({
                        auth: false,
                        text:"password incorrecto"
                        
                    });
                }
                const token = jwt.sign({id:result.id}, config.secret, {
                    expiresIn: 60 * 60 * 24
                });

                res.status(200).json({auth: true,token});
                

            }else{
                res.status(404).json({
                    auth:false,
                    text:"El e-mail no existe"
                });
            }
        });
    }

    /**
     * @method logOut
     * 
     * @description Esta funcion nos permite serrar session y a su vez aliminar nuestro token se session.
     * 
     * @param {*} req 
     * @param {*} res 
     */

    static async logOut(req,res){
        res.status(200).send({ auth: false, token: null });
    }

    /**
     * @method me
     * @description Autentifica el login de un usuario y nos retorna sus datos.
     * @param {*} req
     * @param {*} res
     */
    static async me(req,res){

        console.log(req.userId);

        await mysqlConnection.query('SELECT * FROM USUARIO WHERE id = ? ',[req.userId],(err,result,fields)=>{
            
            if(err){
                console.log(err);
                res.status(500);
            }else if(result.length>0){
                console.log(result);
                res.status(200).send(result[0]);
            }
            else{
                res.status(404).json({
                    text:"Usuario no existente."
                })
            }
            
        });

    }
    
}

module.exports = UserController;

