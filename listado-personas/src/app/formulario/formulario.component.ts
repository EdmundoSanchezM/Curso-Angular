import {
  Component,
  ElementRef,
  EventEmitter,
  Injectable,
  Output,
  ViewChild,
} from '@angular/core';
import { LogginService } from '../LoggingService.service';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  @Output() personaCreada = new EventEmitter<Persona>();
  
  nombreInput:string = '';
  apellidoInput:string = '';
  /*
  @ViewChild('nombreInput') nombreInput: ElementRef;
  @ViewChild('apellidoInput') apellidoInput: ElementRef;*/
  constructor(
    private logginService: LogginService,
    private personasService: PersonasService
  ) {
    this.personasService.saludar.subscribe((indice:number)=> alert("El indice es: " + indice));
  }
  agregarPersona() {
    let persona = new Persona(
      this.nombreInput,
      this.apellidoInput
    );
    //this.logginService.enviaMensajeAConsola("Enviamos persona: "+ persona.nombre + persona.apellido);
    //this.personaCreada.emit(persona);
    this.personasService.agregarPersona(persona);
  }
}
