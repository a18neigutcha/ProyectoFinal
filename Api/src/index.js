const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');

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
app.use(morgan());

/**
 * Configura las respuestas del servidor para que sigan protocoles
 * de seguridad.
 */
app.use(cors());

//Routes

app.use('/',express.static(__dirname+'/out'));
app.use('/api',require('./routes/lugaresRoutes'));
app.use('/api',require('./routes/userRoutes'));




//Starting the server
app.listen(app.get('port'),()=>{
    console.log('CORS-enabled web server listening on port',app.get('port'));
    console.log('Server on port',app.get('port'));
});