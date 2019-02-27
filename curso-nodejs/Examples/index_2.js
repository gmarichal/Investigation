const os = require('os');
const fs = require('fs');

console.log(os.platform());
console.log(os.release());
console.log('freemem: ', os.freemem() / 1024 / 1024);
console.log('totalmem: ', os.totalmem() / 1024 / 1024);
/*
fs.writeFile('./texto.txt','Linea 1', function(err){
    if (err) {
        console.log(err);
    } else {
        console.log('Archivo creado');
    }
});

console.log("todos putos");
*/
fs.readFile('./texto.txt', function(err, data) {
    if(err) { 
        console.log(err);
    }
    console.log(data.toString());
})