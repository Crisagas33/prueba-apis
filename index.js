const express = require('express'); //requiriendo express
const app = express(); //funcion en una constante

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(express.json());

// pal front
app.use(express.static('public'));

//Routes
app.use(require('./src/routes/empleados'));

//Iniciando server
app.listen(app.get('port'), () => {
    console.log('Server en puerto ', app.get('port'))
});