const { Router } = require('express');
const router = Router();
const _ = require('underscore');

var movies = require('../sample.json');

router.get('/', (req, res) => {
    res.json(movies);
});

router.post('/', (req, res) => {
    const { titulo, director, rating, anio} = req.body;
    if (titulo && director && anio && rating) {
        const id = movies.length + 1;
        const newMovie = {...req.body, id};
        movies.push(newMovie);
        res.json({"resultado": "guardado"});
    }else {
        res.status(500);
        res.json({"resultado": "wrong request"});
    }
    
});

router.delete('/:id', (req, res) => {
    const { id } = req.params; 
    // Código alterativo  
    movies = movies.filter(aMovie => aMovie.id != id);
    /*Código original
    _.each(movies, (aMovie, i) => {
        console.log("Id de la pelicula: " + aMovie.id)
        if(aMovie.id == id) {
            console.log("se encontró el iD " + aMovie.id)
            movies.splice(i, 1);
        }
    });*/
    res.json(movies);
});


module.exports = router;