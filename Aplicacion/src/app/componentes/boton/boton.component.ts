import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {

  //propiedades
  @Input() nombreBoton: string; //undefined

  //eventos
  @Output() dioclick = new EventEmitter();


  constructor() { }

  ngOnInit() {
    //this.nombreBoton = this.nombreBoton.toUpperCase();
  }

  ejecutarEvento(){
    console.log('emitiendo');
    this.dioclick.emit();
  }

}
