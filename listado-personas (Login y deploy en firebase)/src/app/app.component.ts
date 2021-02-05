import { Component, OnInit } from '@angular/core';
import firebase from 'firebase';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  titulo = 'Listado de Personas';
  
  constructor(private servicioLogin: LoginService){

  }
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyAsNxkbN2mzalGU6C1vGaHJ-fIvHvmLklM',
      authDomain: 'listado-personas-bf337.firebaseapp.com',
    });
  }  
  
  isAuntenticado(){
    return this.servicioLogin.isAutenticado();
  }
  salir(){
    this.servicioLogin.logout();
  }
}
