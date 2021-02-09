class Persona{
    private nombre:string;

    constructor(nombre:string){
        this.nombre = nombre;
    }

    getNombre():string{ //Importante colocar que tipo regresa la funcion
        return this.nombre;
    }

    static metodoEstatico():number{
        return 10;
    }

}

let persona1 = new Persona("Edmundo");
console.log(persona1.getNombre());
console.log(Persona.metodoEstatico());//Desde el nombre de la clase
