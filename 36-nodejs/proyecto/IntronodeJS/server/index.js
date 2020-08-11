//importar express
const express = require('express');
//configurar express
const app= express();
app.use('/',(req,res) => {
    res.send('Hola mundo en NodeJS');
    console.log(req);
});

app.listen(3000);