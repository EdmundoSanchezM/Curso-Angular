let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@gmail.com',
    edad: 28,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(idioma){
        this.idioma = idioma.toUpperCase();
    },
    get nombreCompleto (){
        return this.nombre + ' ' +this.apellido;
    }
};

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.apellido);
console.log(persona);
persona.lang = "US"; //llama al metodo set
console.log(persona.lang);

let persona2 = new  Object();
persona2.nombre = 'Carlos';
persona2.direccion = 'Saturno 15';
persona2.tel = 5000000;
console.log(persona2);

//Formas de acceder a las propiedades
console.log(persona['email']);
console.log(persona['apellido']); //asu xd, debe de ser un string
//For in recorremos las propiedades jsjsj
for( nombrePropiedad in persona){
    console.log(nombrePropiedad); //Nmms como en python 
    console.log(persona[nombrePropiedad]);
}

//Agregando propiedades a un objeto
persona.quecerdo = "nmms si esta bien cerdo esto xD";
persona.nuevaPropiedad = "Que maravilla";
console.log(persona);
//Borrando una propiedad
delete persona.quecerdo;
console.log(persona);
/*Formas de imprimir objetos*/
console.log(JSON.stringify(persona));