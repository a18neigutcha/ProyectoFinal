const bcrypt = require('bcryptjs');

class User{
    constructor(id,userName,email,password) {
        this.id = id;
        this.userName = userName;
        this.email = email;
        this.password = password;
      }

    async encryptPassword(password){
        const salt = await bcrypt.genSalt(10);
        return bcrypt.hash(password, salt);
    }

    async comparePassword(password){

    }

}

user = new User();


/* userSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
}; */

module.exports = user;