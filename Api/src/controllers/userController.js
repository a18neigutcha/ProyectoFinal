const mysqlConnection = require('../database');
const user = require('../model/User');
const config = require('../config');
const verifyToken = require('./verifyToken');

const jwt = require('jsonwebtoken');


class UserController{
    async signUp(req,res){
        try{
            // Receiving Data
            const {id, userName, email, password } = req.body;
            console.log(req.body);
            // Creating a new User
        /*     const user = new User(
                id,
                userName,
                email,
                password
            ); */
            req.body.password = await user.encryptPassword(password);

            //Save with mysql
            await mysqlConnection.query('INSERT INTO USUARIO set ?',[req.body]);

            // Create a Token
            const token = jwt.sign({ id: user.id }, config.secret, {
                expiresIn: 60 * 60 * 24 // expires in 24 hours
            });

            res.json({ auth: true, token });
        } catch (e) {
            console.log(e)
            res.status(500).send('No se pudo registrar el usuario');
        }

    }
    async me(req,res){
        //Desarrollo del me
        // res.status(200).send(decoded);
        // Search the Info base on the ID
        // const user = await User.findById(decoded.id, { password: 0});
        /* const user = await User.findById(req.userId, { password: 0});
        if (!user) {
            return res.status(404).send("No se ha encontrado el usuario.");
        }
        res.status(200).json(user); */
    }

    async signIn(req, res){

    }
}

/* router.post('/signup', async (req, res) => {
    try {
        // Receiving Data
        const { username, email, password } = req.body;
        // Creating a new User
        const user = new User({
            username,
            email,
            password
        });
        user.password = await user.encryptPassword(password);

        //Save con mysql



        // Create a Token
        const token = jwt.sign({ id: user.id }, config.secret, {
            expiresIn: 60 * 60 * 24 // expires in 24 hours
        });

        res.json({ auth: true, token });

    } catch (e) {
        console.log(e)
        res.status(500).send('Hubo un problema al crear el usuario');
    }
}); */

/* router.get('/me', verifyToken, async (req, res) => {
    // res.status(200).send(decoded);
    // Search the Info base on the ID
    // const user = await User.findById(decoded.id, { password: 0});
    const user = await User.findById(req.userId, { password: 0});
    if (!user) {
        return res.status(404).send("No se ha encontrado el usuario.");
    }
    res.status(200).json(user);
});

router.post('/signin', async (req, res) => {
    const user = await User.findOne({email: req.body.email})
    if(!user) {
        return res.status(404).send("El e-mail no existe")
    }
    const validPassword = await user.comparePassword(req.body.password, user.password);
    if (!validPassword) {
        return res.status(401).send({auth: false, token: null});
    }
    const token = jwt.sign({id: user._id}, config.secret, {
        expiresIn: 60 * 60 * 24
    });
    res.status(200).json({auth: true, token});
});

router.get('/logout', function(req, res) {
  res.status(200).send({ auth: false, token: null });
});
 */

userController = new UserController();

module.exports = userController;