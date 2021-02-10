let suma = function(a:number,b:number){
    return a+b;
};

console.log(suma(5,3));

//let sumaFlecha = (a:number, b:number)=>a+b;
let sumaFlecha = (a:number, b:number)=>{
    return a+b;
};

console.log(sumaFlecha(4,5));

var obtenerNombre= function(){
    return "Dante";
}

let obtenerNombreFlecha = ()=>"Dante";

console.log(obtenerNombre())
    
