//Funciones tipo expresion

let x = function(a, b){
    //arguments[0]; valor de a, para que me serviria, no lo se xd
    //arguments[1]; valor de b
    return a + b;
};

console.log(x(2,4));

//Funcion tipo flecha
const xFlecha = (a,b)=>{
     a+b;
};

console.log(xFlecha(1,3));

//Funciones de tipo self-invoking 'anonima', no es reutilizable
(function (a,b){
    console.log('Ejecutando la funcion  ' + (a+b));
})(3,4);

function miFuncion(a, b){
    console.log(arguments.length);
    return a + b;
}
miFuncion(1,3)
console.log(typeof miFuncion);

var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);

let resultado = sumarTodo(1,2,3,4,5,6,7,8,10)
console.log(resultado);

function sumarTodo(){
    let suma = 0;
    for(let i = 0; i<arguments.length;i++){ //ya vi algo util :v

        suma += arguments[i]
    }
    return suma;
}

/*Paso por valor en JS*/

//Tipos primitivos -No se puede modificar el valor-
let y = 10;

function cambiarValor(a){
    a = 20;
}

cambiarValor(y);//10
console.log(y);

/*Paso por referencia en JS*/

const persona = {
    nombre : "Edmundo",
    apellido: "Sanchez",
    edad: 20
}

function cambiarValorObjeto(p1){
    p1.nombre = "Nah de locos";
    p1.apellido = "Holi";
    p1.edad = 10
}

//Paso por referencia
cambiarValorObjeto(persona);
console.log(persona);