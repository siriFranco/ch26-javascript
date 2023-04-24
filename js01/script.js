 console.log("Sesion JS01");


console.log("Tipo de dato String:", "Hola");

// Number: 12, -45, 367.12, +Infinity, -Infinity, NaN
// Los numéricos usan 64 bits para almacenar, pero solo se usan 53 bits. 
// Para representar el número.
console.log("Tipo de dato Number:", 12, -45, 367.12, 45/0, -56/0, 56*"hola");
console.log("valor máximo:", Number.MAX_VALUE);
console.log("Valor seguro", Number.MAX_SAFE_INTEGER);

// BigInt
// Sirven para representar valor numéricos enteros, de los tipo number
// No puedo representar ó no es seguro
console.log("MAX_SAFE_INTEGER +1", Number.MAX_SAFE_INTEGER+1);
console.log("MAX_SAFE_INTEGER +2", Number.MAX_SAFE_INTEGER+2);
let myBigInt = 9007199254740991n; // Agrega letra n para saber que es BigInt
console.log("Valor de dato BigInt:", myBigInt);
console.log("MAX_SAFE_INTEGER +1n:",myBigInt+ 1n );
console.log("MAX_SAFE_INTEGER +2n:",myBigInt+ 2n );

// Boolean
// Tenemos solo 2 estados: true/false
console.log("Tipo de dato boolean:", true);
console.log("Tipo de dato boolean:", false);

//Undefined
//Dato declarado pero no definido en el tipo
let myVar; //solo se declara
console.log("Tipo de dato undefined", myVar);

//null
// Intensionalmente se borra el tipo de dato
let myVarNull; // solo se declara 
console.log("Tipo de dato myVarNull", typeof(myVarNull)); //undefined
myVarNull = "Saludos sr. PP"; //se asigna dato string
console.log("Tipo de dato myVarNull", typeof(myVarNull)); //string
myVarNull = null;
console.log("Tipo de dato myVarNull", typeof(myVarNull)); //object. Borra cierta parte del código que lo vuelve así

//symbol
// Crea propiedades privadas en los objetos

// -------------------------------
// Tipos de datos Object
//No puedes crear un objeto sin crear una clase
// Object: 
const misDatosDePerfil = {
    // clave: valor
    nombre: "Siria",
    apellido: "Franco",
    edad: "29",
    isBelicoso: false,
    musicaPreferidaPorGenero: {
        rock: "Música ligera",
        pop: "Take on me"
    },
    nombreCompleto: function fullName(){
        return misDatosDePerfil.nombre + " " + misDatosDePerfil.apellido + ", soy el belico";
    }
}

const misDatosDeInstagram = {
    // clave: valor
    nombre: "Malvado",
    apellido: "666",
    edad: null,
    isBelicoso: true,
    musicaPreferidaPorGenero: {
        rock: "Música ligera",
    },
    nombreCompleto: function fullName(){
        return misDatosDeInstagram.nombre + " " + misDatosDeInstagram.apellido + ", soy el belico";
    }
}


console.log("Datos completos: ", misDatosDePerfil);
console.log("Nombre: ", misDatosDePerfil.nombre);
console.log("Música de fin de semana: ", misDatosDePerfil.musicaPreferidaPorGenero.rock);
console.log("Nombre completo: ", misDatosDePerfil.nombreCompleto() );

console.log("Nombre completo: ", misDatosDePerfil.nombreCompleto);
console.log("Nombre completo: ", misDatosDeInstagram.nombreCompleto() )

const cancionesPP = [
    "Soy el belicon",
    "El azul",
    "El tsurito",
    "AMG",
    {
        2020: 5,
        2021: 30,
        2022: 56,
        total: 91
    }
];

// 
console.log("Canción con color:", cancionesPP[1]);
console.log("Canción hechas en el año 2021:", cancionesPP[4].total );
console.log("Canción hechas en el año 2021:", cancionesPP[4]["total"] );
console.log("Canción hechas en el año 2021:", cancionesPP[4][2021] );
console.log("Canción hechas en el año 2021:", cancionesPP[4]["2021"] );

console.log("Num total de elementos: ", cancionesPP.length);
console.log("Contiene la canción AMG: ", cancionesPP.indexOf("AMG")>-1 );
console.log("Contiene la canción AMG: ", cancionesPP.indexOf("AMG666")>-1 );

// -------------------------
// Conversión de datos
const myNumber = 420; // Min en la sesión 
console.log("Num. minutos en la sesión: " + myNumber);
const myNumberTxt = String(myNumber); 
console.log("Num. minutos en la sesión: " + myNumberTxt); 

// toNumber 
const myString = "420";
const sumatoria = 80 + Number(myString);
console.log("Valor de sumatoria " + sumatoria); //500

// toParseInt
/* const myStringInteger = "s420 5768";  Nos da NaN */ 
const myStringInteger = "420 5768";  // No toma el 5768 por el espacio
const sumatoriaEntera = 80 + parseInt(myStringInteger);
console.log("Valor de sumatoria entera " + sumatoriaEntera); //500

// toBoolean
const isBelicoso = "false"
console.log( typeof isBelicoso);
console.log( Boolean(isBelicoso) );

if ( isBelicoso === "false") //Denle su belikin
    console.log("Denle su belikin");
else
    console.log("Abra paso al a barredora");

// Boolean
// Para que sea False, debe ser: "", 0, null, undefined
// Number
// [] = 0,   [30] = 30,   [3,1] = NaN,   false=0,   true=1
// String
// []= "",   [1,2]= "1,2",   function(){} = function(){},   {}= [object, object]