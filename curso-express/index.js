const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.end('Hola Mundo!');
});

app.get('/login', (req, res) => {
    res.end('Aqui va el login!');
});

app.get('*', (req, res) => {
    res.send("<img src='https://image.freepik.com/free-vector/error-404-found-glitch-effect_8024-4.jpg'/>");
    res.end();
});

app.listen(3000, () => {
    console.log('Server working on port 3000');
});

