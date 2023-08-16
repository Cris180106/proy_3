//Paquete importado
require("colors");

//referencia al modulo math a traves de la constante math
const math = require("./modules/math.js")

console.clear();
console.log(math);

const main = async() => {
    console.log("///////////////////////////////////////////////".yellow);
    console.log("******** ".yellow, "Funciones Matematicas".bgYellow,
    "   ************".yellow);
    console.log("**********************************************\n".blue);
    console.log("//////////////////////////////////////////////".red);
    console.log("*                                            *".red);

    console.log(math.add(3,9));
    console.log(math.substract(7,5));
    console.log(math.multiply(4,8));
    console.log(math.divide(2,0.9));
}

main();
    