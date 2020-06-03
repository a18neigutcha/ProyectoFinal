const jwt = require('jsonwebtoken');
const config = require('./config');


/**
 * @file verifyToken.js
 *  
 * @description En este fichero definimos el middlewere para la verificación de un token.
 */ 

/**
 * @function verifyToken
 * @description Nos autentifica el token segun los parametros secretos configurados.
 * 
 * @param {*} req Requiere una cabecera "x-access-token" con el toke de autentificación
 * @param {*} res Responde un mensaje de error si la autentificación falla.
 * @param {*} next Funcion que se ejecutara después.
 */

async function verifyToken(req, res, next) {
    const token = req.headers['x-access-token'];
    console.log("Token: ",token);
    if (!token) {
        return res.status(401).send({ auth: false, text: 'token no enviado.' });
    }
    try{
        const decoded = await jwt.verify(token, config.secret);
        console.log(decoded);
        console.log("decoded token: ",decoded.id);
        req.userId = decoded.id;
    }catch(e){
        return res.status(401).send({ auth: false, text: 'token invalido.' });
    }
    
    next();
}

module.exports = verifyToken;