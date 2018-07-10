import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  password;
  passwordConfirmation;

  crearUsuario(formulario){
    //console.log(titulo.innerText);
    const controles = formulario.controls;
    const password = controles.password.value;
    const passwordConfirmation = controles.passwordConfirmation.value;
    if(password === passwordConfirmation){
      alert("my buen");
    }else{
      this.password = undefined;
      this.passwordConfirmation = undefined;

      alert("muy mal");
    }
  }
}
