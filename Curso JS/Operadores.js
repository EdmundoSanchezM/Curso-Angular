let a = 3,
  b = 2,
  c = "3";

let z = a == c;//se revisa el valor sin importar el tipo
console.log(z);

z = a===c; //revisa si los valores son iguales y tambien los tipos
console.log(z);

z = a != c;//se revisa el valor sin importar el tipo
console.log(z);

z = a !== c; //revisa si los valores son iguales y tambien los tipos
console.log(z);

let resultado = (3>2)? "Ok": "No";
console.log(resultado);
resultado = (100021 % 2 === 0)? "Par":"Impar";
console.log(resultado);

/* Conversion de string a number*/
let numeroString = "10";
console.log(typeof numeroString);

let edad = Number(numeroString);
console.log(typeof edad);

/*********************************/
numeroString = "10x";
edad = isNaN(numeroString)? "No es numero": "Numero";
console.log( edad);
