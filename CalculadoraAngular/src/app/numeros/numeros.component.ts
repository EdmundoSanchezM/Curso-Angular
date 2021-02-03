import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.css'],
})
export class NumerosComponent {
  A = '';
  B = '';
  @Output() resultado = new EventEmitter<string>();
  Calcular() {
    this.resultado.emit(this.A + this.B + '');
  }
}
