'use strict';

try{
    let x = 10;
    //miFuncion();
    throw('mi error');
}catch(error){
    console.log(error);
}finally{//siempre se ejecuta
    console.log('Termina la revision de errores');
}
console.log('continuamos...');

/***********/
let resultado = -12;
try{
    //X = 10;
    if(isNaN(resultado)) throw('No es un numero');
    else if( resultado === '') throw('Cadena vacia');
    else if( resultado >= 0) throw('Valor positivo');
    else if( resultado <= 0) throw('Valor negativo');
}catch(error){
    console.log(error);
    //console.log(error.name);
    //console.log(error.message)
}finally{
    console.log('Termina revision de errores');
}