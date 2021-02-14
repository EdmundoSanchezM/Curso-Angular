let persona1 ={
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(titulo, tel){
        return titulo + ' ' + this.nombre + ' ' + this.apellido + ' ' + tel;
    }
}

let persona2 ={
    nombre: 'Carlos',
    apellido: 'Lara',
}

//Uso de call para usar el metodo persona1.nombreCompleto con los datos de persona2
console.log(persona1.nombreCompleto('Lic', 'de fresa jsjsjjs'));

console.log(persona1.nombreCompleto.call(persona2,'Ing', '3111111'));