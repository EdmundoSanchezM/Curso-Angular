import { EventEmitter, Injectable } from '@angular/core';
import { DataServices } from './data.services';
import { LogginService } from './LoggingService.service';
import { Persona } from './persona.model';

@Injectable()
export class PersonasService {
  personas: Persona[] = [];
  saludar = new EventEmitter<number>();
  constructor(
    private logginService: LogginService,
    private dataService: DataServices
  ) {}

  setPersonas(personas: Persona[]){
    this.personas = personas;
  }

  obtenerPersonas() {
    return this.dataService.cargarPersonas();
  }

  agregarPersona(persona: Persona) {
    this.logginService.enviaMensajeAConsola(
      'agregamos persona' + persona.nombre
    );
    
    if(this.personas == null){
      this.personas = [];
    }
    this.personas.push(persona);
    this.dataService.guardarPersonas(this.personas);
  }

  encontrarPersona(indice: number) {
    let persona: Persona = this.personas[indice];
    return persona;
  }

  modificarPersona(indice: number, persona: Persona) {
    this.personas[indice] = persona;
    this.dataService.modificarPersona(indice,persona);
  }

  eliminarPersona(index: number) {
    this.personas.splice(index, 1);
    this.dataService.eliminarPersona(index);
    //se vuelve a guardar el arreglo para regenerar los indices en la bd
    this.modificarPersonas();
  }

  modificarPersonas(){
    if(this.personas !=null){
      this.dataService.guardarPersonas(this.personas);
    }
  }
}
