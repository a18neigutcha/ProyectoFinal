const bcrypt = require('bcryptjs');

class User{

    /**
     * @constructor User
     * @param {int} id ID del usuario.
     * @param {string} userName Nomber del usuario. 
     * @param {string} email Email del usuario
     * @param {string} password Password encryptado.
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

module.exports = User;