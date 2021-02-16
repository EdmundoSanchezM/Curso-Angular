let miPromesa = new Promise((resolver, rejected) => {
  let expresion = true;
  if (expresion) resolver("Promesa realizada con exito");
  else rejected("Se produjo un error");
}); //Parametros funciones callback, podemos usar uno.

/*miPromesa.then(
    valor => console.log(valor),
    error => console.log(error)
);*/
miPromesa
  .then((valor) => console.log(valor))
  .catch((error) => console.log(error));

let promesa = new Promise((resolver)=>{
    //console.log('inicio promesa');
    setTimeout( ()=> resolver('Saludos con promesa y timeout de 3s'),3000);
    //console.log('fin promesa');
});

//promesa.then((valor)=> console.log(valor));

//async indica que una funcion regresa una promesa
async function miFuncionConPromesa(){
    return 'Saludos con promesa y async';
}

miFuncionConPromesa().then(valor => console.log(valor));

//async/await siempre juntos 
async function funcionConPromesaYAwait(){
    let miPromesa = new Promise( resolver =>{
        resolver('Promesa con await');
    });

    console.log(await miPromesa);
}

funcionConPromesaYAwait();

//promesas, await, async y setTimeout

async function functioConPromesaAwaiTimeout() {
    console.log('Inicio funcion');
    let miPromesa = new Promise(resolver=>{
        setTimeout(()=> resolver('Promesa con await y timeout'),3000);
    });
    console.log(await miPromesa);
    console.log('Fin de la funcion');
}

functioConPromesaAwaiTimeout();