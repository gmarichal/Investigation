const express = require('express');
const app = express();
const morgan = require('morgan');

//Setting
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

// Midleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false})); //Datos desde formularios, básicos.
app.use(express.json()); //Para que use JSON

//routes
app.use(require('./routes/index'));
app.use('/api/movies', require('./routes/movies'));

// Starting the app
app.listen(3000, () => {
    console.log(`Server listening on port ${app.get('port')}`); 
});