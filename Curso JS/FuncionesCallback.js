function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(a,b,funcionCallback){
    let res = a +b;
    funcionCallback('Resultado: '+res);
}

sumar(5,1,imprimir);

//Llamadas asincronas con uso setTimeout
function miFuncionCallback(){
    console.log('saludo asincrono despues de 3s');
}

setTimeout(miFuncionCallback,3000);//despues de 3s

setTimeout(function(){console.log('saludo asincrono 2')},4000);

setTimeout(()=> console.log('saldo asincrono 3'),1000);

//Setinterval
let reloj = ()=>{
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`)
}

setInterval(reloj, 1000); //1 sef