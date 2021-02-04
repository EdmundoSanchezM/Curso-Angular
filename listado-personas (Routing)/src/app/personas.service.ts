import { EventEmitter, Injectable } from '@angular/core';
import { LogginService } from './LoggingService.service';
import { Persona } from './persona.model';

@Injectable()
export class PersonasService {
  personas: Persona[] = [
    new Persona('Juan', 'Perez'),
    new Persona('Laura', 'Juarez'),
    new Persona('Karla', 'Lara'),
  ];

  saludar = new EventEmitter<number>();
  constructor(private logginService: LogginService) {}

  agregarPersona(persona: Persona) {
    this.logginService.enviaMensajeAConsola(
      'agregamos persona' + persona.nombre
    );
    this.personas.push(persona);
  }

  encontrarPersona(indice:number){
    let persona: Persona = this.personas[indice];
    return persona;
  }

  modificarPersona(indice:number, persona : Persona){
    this.personas[indice] = persona;
  }

  eliminarPersona(index:number){
    this.personas.splice(index,1);
  }
}
