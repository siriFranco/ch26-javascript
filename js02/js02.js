console.log("Sesión JS02");

// ---------- Función declarada -------------
// function declaration, function statement
// Una de las características es que las funciones declaradas tiene hoisting

console.log("El resultado de 5*10= " + multiplica(5,10)); // invocando la función

/* function nombreFuncionCamelCase (parámetros) {
    instrucciones;
}
*/

/* { // bloque de código
    const operandoA = 5
    const operandoB = 10
    const resultado = 5*10;
    console.log(resultado);
    } */

multiplica(5,10); //invocando la función sin retorno
multiplica(8,8);

function multiplica(operandoA, operandoB){
    const resultado = operandoA * operandoB;
    console.log(resultado);
}

function divide(dividendo, divisor) {
    return dividendo/ divisor;
}

console.log( divide(5,2) );
console.log( divide(5,"2") );
console.log( divide("5","2") );
console.log( divide("5 0","2") );

const sum = function sumatoria( a, b){
    return a + b;
}

const resta = function (a, b){
    return a - b;
}

const potencia = function (a,b){
    return a**b;
}

console.log( sum(9,9) ); //18
console.log( resta(90,20) );

//--------------- Funciones autoinvocadas ------------
// self-invoking functions
// se autoinvocan, se pueden definir con funciones anónimas
(function (){
    console.log("Me autoinvoco en la función");
}) ();

// ----------- Funciones flecha ---------------
// Arrow functions
// Son funciones similares a las funciones declaradas, pero:
// No requieren la palabra function
// Si tiene una sola instrucción no requiere las {}
// Si la instrucción es el mismo retorno, no requiere la palabra return


/* esto se traduce a la siguiente función flecha
const areaRectangulo = function(base, altura){
    return base * altura;
}

console.log("Área de rectángulo 5*3 " + areaRectangulo(5,3)); */

function areaRectangulo(base, altura) {
    return base * altura;
}

console.log("Área de rectángulo 5x3 " + areaRectangulo(5,3) );

//------------Parámetros default
/**
 * Este comentario es la documentación de la función
 * @param {number} base es la descripción de base
 * @param {number} altura esto es la descripción de altura
 * @returns área del triángulo
 */

const areaTriangulo = (base =1, altura=1) => base * altura / 2;

console.log("Área de triángulo b:5 a:10 =" + areaTriangulo(5,10));
console.log("Área de triángulo b:8 =" + areaTriangulo(8));