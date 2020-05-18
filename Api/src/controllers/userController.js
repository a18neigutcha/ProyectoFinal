const mysqlConnection = require('../database');
const config = require('../config');
const verifyToken = require('../verifyToken');

const jwt = require('jsonwebtoken');

const User = require ('../model/User');


class UserController{

    async signUp(req,res){
        try{
            // Receiving Data
            const {id, userName, email, password } = req.body;

            // Creating a new User
            const user = new User(
                id,
                userName,
                email,
                password
            ); 

            user.password = await User.encryptPassword(password);
            
            //Save with mysql
            await mysqlConnection.query('INSERT INTO USUARIO set ?',[user]);

            // Create a Token
            const token = jwt.sign({ id: user.id }, config.secret, {
                expiresIn: 60 * 60 * 24 // expires in 24 hours
            });

            res.json({ auth: true, token });
        } catch (e) {

            console.log(e);
            res.status(500).send('No se pudo registrar el usuario');
        }

    }

    async signIn(req, res){

        await mysqlConnection.query('SELECT * FROM USUARIO WHERE email=?',[req.body.email],async (err, result, fields)=>{
            if (err){
                console.log(err);
                res.status(500);
            }
            if(result.length>0){

                const validPassword = await User.comparePassword(req.body.password, result.password);
                console.log("Valido",validPassword);
                if (!validPassword) {
                    res.status(401).send({
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

    /*     async me(req,res){

        res.status(200).send(decoded);
        //Search the Info base on the ID
        const user = await User.findById(decoded.id, { password: 0});
        const user = await User.findById(req.userId, { password: 0});
        if (!user) {
            return res.status(404).send("No se ha encontrado el usuario.");
        }
        res.status(200).json(user);
    }
 */

    async logOut(req,res){
        res.status(200).send({ auth: false, token: null });
    }
}


userController = new UserController();

module.exports = userController;