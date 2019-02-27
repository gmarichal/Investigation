const Math = {};

function add(x1, x2){
    return x1 + x2;
};

function substract(x1, x2){
    return x1 - x2;
};

function multiply(x1, x2){
    return x1 * x2;
};

function divide(x1, x2){
    if(x2 === 0){
        console.log("Cant divide by 0");
        return null;
    } else {
        return x1 / x2;
    }
};

function hello(name){
    console.log("hola", name);
}


Math.add = add;
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;

module.exports = Math;


/*OPCION 1
exports.add = add;
exports.substract = substract;
exports.multiply = multiply;
exports.divide = divide;
*/
