//Funcion constructor de objetos de tipo Persona
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}
Persona.prototype.tel = '555555555555';//Se agrega esta propiedad directo al constructor, por lo que todos tendrian el mismo valor
let padre = new Persona('Juan', 'Perez', 'email@email.com');
padre.tel = '12313131';
console.log(padre.tel);
console.log(padre.nombreCompleto());
let madre = new Persona('Maria', 'Perez', 'email@email.com')
madre.tel = '11223300'
console.log(madre.tel)
console.log(madre.nombreCompleto());

//Formad de crear objetos JS
let miObjeto = new Object();
let miObjeto2 = {};
