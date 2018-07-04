import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-ruta-faq',
  templateUrl: './ruta-faq.component.html',
  styleUrls: ['./ruta-faq.component.scss']
})
export class RutaFAQComponent implements OnInit {

  constructor(private _httpClient: HttpClient) { }

  ngOnInit() {
    const url = 'https://jsonplaceholder.typicode.com/posts';

    const requestHttp$ = this._httpClient.get(url);
    /*const requestHttp$ = this._httpClient.post(url, {
      nombre:  'Pao',
      edad: 29,
      casado: false
    });*/

    requestHttp$.subscribe(
      (respuestaOK)=>{
        console.log(respuestaOK);
      },
      (respuestError)=>{
        console.log(respuestError);
      },
      ()=>{
        //completa
        console.log('completado');
      }
    );
    console.log('Fin');
  }

}
