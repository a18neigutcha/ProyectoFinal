const bcrypt = require('bcryptjs');
const mysqlConnection = require('../database');

module.exports = class User{

    /**
     * 
     * @param {int} id 
     * @param {string} userName 
     * @param {string} email 
     * @param {string} password
     *  
     */

    constructor(id,userName,email,password) {
        this.id = id;
        this.userName = userName;
        this.email = email;
        this.password = password;
    }

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
     * @returns {boolean} Nos retorna true si los password coinciden y false caso contrario.
     */

    async comparePassword(password){
        return await bcrypt.compare(password, this.password);
    }


}
