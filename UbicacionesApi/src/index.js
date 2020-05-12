const express = require('express');
const app = express();
const path = require('path');



//Settings(Configuraciones)
app.set('port',process.env.PORT || 3000);

//Middlewares
/* Permite que nuestro servidor procese informacion en formato JSON */
app.use(express.json());


//Routes

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/index.html'));
});


app.use('/api',require('./routes/lugaresRoutes'));

//Starting the server
app.listen(app.get('port'),()=>{
    console.log('Server on port',app.get('port'));
});