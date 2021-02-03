import { Component, Input, OnInit } from '@angular/core';
import { constants } from 'buffer';
import { Egreso } from './egreso.model';
import { EgresoServicio } from './egreso.servicio';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements OnInit {

  egresos:Egreso[]=[];
  @Input() ingresoTotal:number;
  constructor(private egresoService:EgresoServicio) { }

  ngOnInit(): void {
    this.egresos = this.egresoService.egresos;
  }
  
  eliminarEgreso(egreso:Egreso){
    this.egresoService.eliminar(egreso);
  }

  calcularPorcentaje(egreso:Egreso){
    return egreso.valor/this.ingresoTotal;
  }
}
