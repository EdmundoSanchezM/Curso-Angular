import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';
import { Observable } from 'rxjs/internal/Observable';
import { LoginService } from './login/login.service';

@Injectable()
export class DataServices {
  constructor(private httpClient: HttpClient, private loginService: LoginService) {}

  cargarPersonas(): Observable<any> {
    const token = this.loginService.getIdToken();
    return this.httpClient.get(
      'https://listado-personas-bf337-default-rtdb.firebaseio.com/datos.json?auth='+token
    );
  }
  //Guardar Personas
  guardarPersonas(personas: Persona[]) {
    const token = this.loginService.getIdToken();
    this.httpClient
      .put(
        // usando el metodo post crea una instancia diferente cada vez en firebase con la opcion de "Realtime Database"; usando put no es asi si no que estamos modificando la misma instancia cada vez
        'https://listado-personas-bf337-default-rtdb.firebaseio.com/datos.json?auth='+token,
        personas
      )
      .subscribe(
        (response) => {
          console.log('resultado de guardar Personas' + response);
        },
        (error) => console.log('Error al guardar personas' + error)
      );
  }

  modificarPersona(index: number, persona: Persona) {
    const token = this.loginService.getIdToken();
    let url: string;
    url =
      'https://listado-personas-bf337-default-rtdb.firebaseio.com/datos/' +
      index +
      '.json?auth='+token;
    this.httpClient.put(url, persona).subscribe(
      (response) => {
        console.log('resultado de modificar Personas' + response);
      },
      (error) => console.log('Error al modificar personas' + error)
    );
  }

  eliminarPersona(index: number) {
    const token = this.loginService.getIdToken();
    let url: string;
    url =
      'https://listado-personas-bf337-default-rtdb.firebaseio.com/datos/' +
      index +
      '.json?auth='+token;
    this.httpClient.delete(url).subscribe(
      (response) => {
        console.log('resultado de eliminar Personas' + response);
      },
      (error) => console.log('Error al eliminar personas' + error)
    );
  }
}
