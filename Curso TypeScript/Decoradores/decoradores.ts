function Saludar(target: Function): void{
    target.prototype.saludos= function():void{
        console.log("Hola desde un decorador");
    }
}

@Saludar
class Hola{
    constructor(){
    }
}

let hola1 = new Hola();
hola1.saludos();
//Nota, esto es experimental por o que salen errores, sin embargo, esta cosa funciona jsjsjsjsj