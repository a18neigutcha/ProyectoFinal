const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const cors = require('cors')



//Settings(Configuraciones)
app.set('port',process.env.PORT || 3000);

//Middlewares
/* Permite que nuestro servidor procese informacion en formato JSON */
app.use(express.json());
app.use(morgan());
app.use(cors());

//Routes

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/index.html'));
});


app.use('/api',require('./routes/lugaresRoutes'));

//Starting the server
app.listen(app.get('port'),()=>{
    console.log('CORS-enabled web server listening on port',app.get('port'));
    console.log('Server on port',app.get('port'));
});