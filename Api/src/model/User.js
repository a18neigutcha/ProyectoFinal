const bcrypt = require('bcryptjs');

class User{

    /**
     * @method encryptPassword
     * @param {string} password 
     * @returns {Promise} Retorna el password encryptado.
     */

    static async encryptPassword(password){
        const salt = await bcrypt.genSalt(10);
        return bcrypt.hash(password, salt);
    }

    /**
     * @method comparePassword
     * @param {string} password 
     * @param {string} passwordComp
     * @returns {boolean} Nos retorna true si los password coinciden y false caso contrario.
     */

    static async comparePassword(password,passwordComp){
        return await bcrypt.compare(passwordComp,password);
    }


}

module.exports = User;