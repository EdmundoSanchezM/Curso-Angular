//Tipo de dato string
var nombre = "Carlos";
console.log(typeof nombre);

nombre = 10;
console.log(typeof nombre);

//Tipo de dato numerico
var numero = 1000;
console.log(numero);

//Tipo de dato object
var objeto = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 20,
}

console.log(typeof objeto);

//Tipo de dato boolean
var bandera = false;
console.log(typeof bandera);

//Tipo de dato function
function miFuncion(){}
console.log(typeof miFuncion)

//Tipo de dato Symbol
var simbolo = Symbol("Mi simbolo");
console.log(typeof simbolo);

//Tipo clase, es una funcion
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

console.log(typeof Persona);

//Tipo undefined
var x;
console.log(typeof x);

x = undefined;
console.log(typeof x);

//null = ausencia de valor
var y = null;
console.log(typeof y);

var autos = ["BMW","Audi","Volvo"];
console.log(typeof autos);

var z = '';
console.log(typeof z);

nombre = "Juan";
var apellido="Perez";
var nombreCompleto = nombre + ' ' +apellido;
console.log(nombreCompleto);

var nombreCompleto2 = 'Carlos' + " " + "Lara";
console.log(nombreCompleto2);

x = nombre + (2+5);
console.log(x);

x = 2 + 4 +nombre;
console.log(x)