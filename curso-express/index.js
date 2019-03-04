const express = require('express');
const app = express();
const morgan = require('morgan');

// requiriendo rutas
const routes = require('./routes');
const routesAPI = require('./routes-api');

//setting
app.set('appName', 'mi primer server');
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//middlewares
app.use(morgan('dev'));

// rutas
app.use(routes);
app.use('/api', routesAPI);

app.get('*', (req, res) => {
    res.send("<img src='https://image.freepik.com/free-vector/error-404-found-glitch-effect_8024-4.jpg'/>");
    res.end();
});

app.listen(3000, () => {
    console.log('Server working on port 3000');
    console.log('Nombre de la app: ' + app.get('appName'));
});

