"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Saludar(target) {
    target.prototype.saludos = function () {
        console.log("Hola desde un decorador");
    };
}
var Hola = /** @class */ (function () {
    function Hola() {
    }
    Hola = __decorate([
        Saludar
    ], Hola);
    return Hola;
}());
var hola1 = new Hola();
hola1.saludos();
//Nota, esto es experimental por o que salen errores, sin embargo, esta cosa funciona jsjsjsjsj
