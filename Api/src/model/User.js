const bcrypt = require('bcryptjs');


/**
 * @file User.js
 * 
 * @descriptio En estes fichero se definen funciones  que puede hacer un usuario no relacionadas con la base de datos.
 * 
 */


/**
 * @static User
 * @descriptio En estes fichero se definen funciones  que puede hacer un usuario no relacionadas con la base de datos.
 * 
 */


class User{


    /**
     * @method encryptPassword
     * @description Encrypta un password 10 veces(esta parte es variables dependiendo de la seguridad de necesites).
     * @param {string} password Password sin encryptar. 
     * @returns {Promise} Retorna el password encryptado.
     */

    static async encryptPassword(password){
        const salt = await bcrypt.genSalt(10);
        return bcrypt.hash(password, salt);
    }

    /**
     * @method comparePassword
     * @description Compara dos passwords un encryptado y otro sin encryptar y verifica si son iguales.
     * @param {string} password Password encryptado a comparar.
     * @param {string} passwordComp Password sin encryptar a comparar
     * @returns {boolean} Nos retorna true si los password coinciden y false caso contrario.
     */

    static async comparePassword(password,passwordComp){
        return await bcrypt.compare(passwordComp,password);
    }


}

module.exports = User;