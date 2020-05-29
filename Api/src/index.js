const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const multer = require ('multer');


/**
 * @file index.js
 * @description En este fichero establecemos la configuracion basica con express
 * para lanzar el seridor Settings, Middlewares, Routes, Start Server.
 * 
 */


/**
 * Settings(Configuraciones)
 * 
 * Configura variables global para el puerto donde escuchara el servidor.
 */
app.set('port',process.env.PORT || 3000);



//Middlewares

/**
 * Permite que nuestro servidor procese informacion en formato JSON.
 */
app.use(express.json());

/**
 * Nos permite ver las peticiones al servidor.
 */
app.use(morgan(":method :url :status"));

/**
 * Configura las respuestas del servidor para que sigan protocoles
 * de seguridad.
 */
app.use(cors());


/**
 * Guarde las imagenes
 */

const storage = multer.diskStorage({
    destination: path.join(__dirname,'public/img/'),
    filename: (req,file,cb)=>{
        cb(null,file.originalname);
    }
});

app.use(multer({
    storage,
    dest: path.join(__dirname,'public/img/')
}).single('imagen'));


//Routes

const pathDocs = path.join(__dirname,'public/docs');
const pathImg = path.join(__dirname,'public/img');

app.use('/',express.static(pathDocs));
app.use('/img',express.static(pathImg));
app.use('/api',require('./routes/lugaresRoutes'));
app.use('/api',require('./routes/userRoutes'));




//Starting the server
app.listen(app.get('port'),()=>{
    console.log('CORS-enabled web server listening on port',app.get('port'));
    console.log('Server on port',app.get('port'));
});