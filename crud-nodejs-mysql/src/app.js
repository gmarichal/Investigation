const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();

//import routes
const alumnoRoutes = require('./routes/alumnos');

//settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Middlewares
app.use(morgan('dev')); 

app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: '3306',
    database: 'alumnos'
}, 'single'));

app.use(express.urlencoded({extended: false})); 

//Rutas
app.use('/', alumnoRoutes);

//Static files
app.use(express.static(path.join(__dirname, 'public')));

//Empezando el server
app.listen(app.get('port'), () =>{
    console.log('Server on port :' + app.get('port'));

});
