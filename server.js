 const cors = require('cors');
 const express = require('express');
 const app = express();
 
app.use(cors({
     origin: ['http://localhost:3000'],
     "methods": "GET,PUT,POST",
     "preflightContinue": false,
     "optionsSuccessStatus": 204,
     credentials: true
 }));


//Midwhere 
app.use(express.static(__dirname + '/public'));

// ruta principal
/*
app.get('/', (req, res) => {

    // res.send('Hola Mundo');
    let jsonSalida = {
        nombre: 'Darwin Uzcategui',
        edad: 46,
        sexo: 'Masculino',
        activo: true,
        url: req.url
    };
    res.send(jsonSalida);
});


// otra ruta
app.get('/data', (req, res) => {
    res.send('hola Data');
});
*/

app.listen(3000, () => {
    console.log('Escuchando en el puerto 3000');
});