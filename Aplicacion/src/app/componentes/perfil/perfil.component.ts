import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  @Input() nombre: string;
  @Input() urlImagen: string;

  constructor() { }

  ngOnInit() {
  }

}
