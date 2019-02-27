const express = require('express');
const colors  = require('colors');
const server  = express();

const _serverPort = 3000;

server.listen(_serverPort, function() {
    console.log(('Conan server listening on port ' + _serverPort).green);
});

server.get('/', function(req, res) {
    res.send('<img src="https://thumbs.gfycat.com/FaroffCoarseBarnacle-size_restricted.gif"/>');
    res.end();
});

/* OLD WAY...
const http   = require('http');
const colors = require('colors');


const serverPort = 3000;

const handelServer = function(req, res){
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.write('<h1>HOLA MUNDO NODE.JS</h1><marquee>Todos putos</marquee');
    res.end()};

const server = http.createServer(handelServer);

server.listen(serverPort, function(){
    console.log(colors.yellow('servidor levatado en puerto: ' + serverPort).bgBlue);
});

*/