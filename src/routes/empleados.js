//Ruta para empleados
const express = require('express'); //requiriendo express
const router = express.Router(); //Objeto para definir rutas en el server

//Requiriendo la conexion con la bd
const mysqlConection = require('../database');

//Ruta ver todos los empleados
router.get('/lista', (req, res) => {
    mysqlConection.query('SELECT * FROM tbempleados', (err, rows, fields) =>{
        if(!err){
            res.json(rows); //Imprimse las filas
        }else{
            console.log(err) //Imprime error
        }
    });
});

//Ruta ver empleado
router.get('/:id', (req, res) => {
    const {id} = req.params;
    mysqlConection.query('SELECT * FROM tbempleados WHERE idEmpleado = ?', [id], (err, rows, fields) =>{ 
        if(!err){
            res.json(rows[0]); //Imprime las filas y ya que es un arreglo se agrega 0 para que muestre la primera posicion 
        }else{
            console.log(err) //Imprime error
        }
    });
});

//Ruta agregar empleado
router.post('/', (req, res) => {
    mysqlConection.query('INSERT INTO tbempleados SET ?', [req.body], (err, rows, fields) => {
        if(!err){
                res.json({Status: 'Empleado Agregado'}); //
                console.log(req.body)
        }else{
                console.log(err) //Imprime error
        }
    });
});

//Ruta editar empleado
router.put('/:id', (req, res) => {
    mysqlConection.query('UPDATE tbempleados SET ? WHERE idEmpleado = ?', [req.body, req.params.id], (err, rows, fields) => {
        if(!err){
            res.json({Status: 'Empleado Actualizado'}); //
            console.log(req.body)
        }else{
            console.log(err) //Imprime error
        }
    });
});

//Ruta eliminar empleado
router.delete('/:id', (req, res) => {
    mysqlConection.query('DELETE FROM tbempleados WHERE idEmpleado = ?', [req.params.id], (err, rows, fields) => {
        if(!err){
            res.json({Status: 'Empleado Eliminado'}); //
        }else{
            console.log(err) //Imprime error
        }
    });
});

//Exportando objeto router
module.exports = router; 