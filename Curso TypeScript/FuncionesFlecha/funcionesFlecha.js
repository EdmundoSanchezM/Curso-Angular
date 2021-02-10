"use strict";
var suma = function (a, b) {
    return a + b;
};
console.log(suma(5, 3));
//let sumaFlecha = (a:number, b:number)=>a+b;
var sumaFlecha = function (a, b) {
    return a + b;
};
console.log(sumaFlecha(4, 5));
var obtenerNombre = function () {
    return "Dante";
};
var obtenerNombreFlecha = function () { return "Dante"; };
console.log(obtenerNombre());
