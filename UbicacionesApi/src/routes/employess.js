const express=require('express');
const router=express.Router();

const mysqlConnection = require('../database');

router.get('/',(req,res)=>{
    mysqlConnection.query('SELECT * FROM employes',(err,rows,fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });

});


module.exports = router;