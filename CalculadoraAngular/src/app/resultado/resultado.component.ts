import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit  {
  @Input() resultado='';
  ngOnInit(): void {
  }
}
