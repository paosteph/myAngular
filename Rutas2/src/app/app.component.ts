import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private _router: Router){

  }

  irAPerfilDeUsuario(){
    const url = ['/home','usuario',true,'u',5]; //segemntos
    this._router.navigate(url);
  }
}
