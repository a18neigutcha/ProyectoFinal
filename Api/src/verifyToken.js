const jwt = require('jsonwebtoken');
const config = require('./config');

/**
 * @function verifyToken
 * @description Nos autentifica el token segun los parametros secretos configurados.
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

async function verifyToken(req, res, next) {
    const token = req.headers['x-access-token'];
    if (!token) {
        return res.status(401).send({ auth: false, text: 'token no enviado.' });
    }
    try{
        const decoded = await jwt.verify(token, config.secret);
        req.query.userId = decoded.id;
    }catch(e){
        return res.status(401).send({ auth: false, text: 'token invalido.' });
    }
    
    next();
}

module.exports = verifyToken;