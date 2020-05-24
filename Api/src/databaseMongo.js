const mongoose = require('mongoose');

mongoose.connect('mongodb://mongodb/barcelonaDesconocida',{
    useNewUrlParser:true,
    useUnifiedTopology: true
})
.then(db => console.log('Database Mongo is conected'));