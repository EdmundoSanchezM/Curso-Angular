import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { PersonasComponent } from './personas/personas.component';

const routes: Routes = [
  {path: '', component: PersonasComponent},
  {path: 'personas', component: PersonasComponent, children:[
    {path: 'agregar', component:FormularioComponent},
    {path: ':id', component: FormularioComponent},//:"nombre del parametro a pasar"
  ]},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports:[ RouterModule.forRoot(
    routes
  )
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
