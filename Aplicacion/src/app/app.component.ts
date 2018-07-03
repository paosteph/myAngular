import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css']
})
export class AppComponent {
  nombre: String = 'Paola';
  apellido: String = 'Guamani';

  mostrar = false;
  arregloNumeros = [5,4,3,2,1];

  nombreImagen = 'brasil.png';
  anchoImagen = 100;

  perfiles = [
    {
      id:0,
      nombrePerfil:'pao01',
      nombreImagen:'netflix01.png'
    },
    {
      id:1,
      nombrePerfil:'pao02',
      nombreImagen:'netflix02.png'
    },
    {
      id:2,
      nombrePerfil:'pao03',
      nombreImagen:'netflix03.png'
    },
    {
      id:3,
      nombrePerfil:'pao04',
      nombreImagen:'netflix04.png'
    },
    {
      id:4,
      nombrePerfil:'pao05',
      nombreImagen:'netflix05.png'
    }
  ];

  aumentarTmanio(){
    this.anchoImagen += 10;
  }

  cambiarTmanioImagen(tamanioCambio: number){
    this.anchoImagen += tamanioCambio;
  }

  titulo = '¿Quièn esta viendo ahora?';
  nombreBoton = 'administrar perfiles';

  irAAdministrarPerfiles(){
    console.log('administrando')
  }

  irACuenta(nombreCuenta: string){
    console.log('ir a cuenta', nombreCuenta);
  }
}
