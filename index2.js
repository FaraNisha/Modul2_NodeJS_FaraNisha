const express = require('express');
const app = express();

app.get('/', function(req,res){
    res.send('Halo Fara Nisha');
})

app.listen('8080');
