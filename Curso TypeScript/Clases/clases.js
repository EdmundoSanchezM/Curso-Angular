"use strict";
var Persona = /** @class */ (function () {
    function Persona(nombre) {
        this.nombre = nombre;
    }
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.metodoEstatico = function () {
        return 10;
    };
    return Persona;
}());
var persona1 = new Persona("Edmundo");
console.log(persona1.getNombre());
console.log(Persona.metodoEstatico()); //Desde el nombre de la clase
