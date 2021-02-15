//Nota: No se aplica Hoisting es decir debemos tener nuestra clase creada antes de querer crear un objeto
class Persona {//Donde esta la palabra class?, aqui esta cerdo xd
    
    static contadorObjetosPersona = 0; //atributo de clase
    email = 'default'; //atributo de objetos
    
    static get MAX_OBJ(){//Simulacion de constante statica
        return 5;
    }

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        if(Persona.contadorObjetosPersona<Persona.MAX_OBJ)
            this.idPersona = ++Persona.contadorObjetosPersona;
        else
            console.log("No papu, demasiados objetos personas");
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        return this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    nombreCompleto(){
        return this.idPersona + ' ' + this._nombre + ' ' + this._apellido;
    }

    //Sobreescribiendo el metodo de la clase Padre (object)
    toString(){
        /*Se aplica polimorfismo (multiples formas en tiempo de ejecucion
        el metodo que se ejecuta depende si es una referencia de tipo padre
        o de tipo hijo*/
        return this.nombreCompleto();
    }

    static saludar(){
        console.log('Saludos desde un metodo estatico');;
    }

    static saludar2(persona){
        console.log(persona.nombre+' '+persona.apellido);
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);//Llamar al constructor de la clase padre
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }

    //Sobreescritura
    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento;
    }
}


let persona1 = new Persona('Juan', 'Perez');
persona1.nombre = 'Juan Carlos';// set nombre()
console.log(persona1.toString());

let empleado1 = new Empleado('Maria','Jimenez','Sistemas');
console.log(empleado1.nombreCompleto());
console.log(empleado1.toString())

//persona1.saludar(); no es posible llamar un metodo estatico desde un objeto
Persona.saludar();
Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado1);

console.log(persona1.contadorObjetosPersona);
console.log(Persona.contadorObjetosPersona);
console.log(Empleado.contadorObjetosPersona);

console.log(persona1.email);

let persona2 = new Persona('Karla', 'Ramirez');
console.log( persona2.toString() )

console.log(Persona.MAX_OBJ);
let persona3 = new Persona('Armando', 'Toledos');
let persona4 = new Persona('Aquiles', 'Serdan');
let persona5 = new Persona('Elver', 'Galarga');
console.log(persona5.toString())