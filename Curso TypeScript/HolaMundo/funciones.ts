let saludo = "Hola mundo desde TS"; //forma js normal en TS nos lo declara como un string y no podemos modificarlo a otro tipo de dato
saludo = "cambio";
let numero: number;//Al igual que lo anterior podemos asignar x valor numerico y nos lo manejara como una varible numerica pero no podemos modificarlo
numero = 10;
let cualquiera: any;//Podemos darle cualquier valor uwu
cualquiera = "cadeba";
cualquiera = 10;

const PI_NUMERO = 3.14;//Lo de siempre jsjsj

function saludar() {
  console.log(saludo);
  console.log(numero);
  console.log(PI_NUMERO);
}

saludar();
