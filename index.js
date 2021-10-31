const express = require('express'); //requiriendo express
const app = express(); //funcion en una constante

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(express.json());

//Routes
app.use(require('./src/routes/empleados'));

//Iniciando server
app.listen(app.get('port'), () => {
    console.log('Server en puerto ', app.get('port'))
});