import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';
import { Footer } from '../../shared/footer/footer';

@Component({
  selector: 'app-login',
  imports: [Header,Footer],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  titulo = 'Faça seu Login!'
  login = ''
  senha = ''
  botaoDesabilitado: boolean = true;

onBotaoClicado(){
  if(this.login.trim() !== '' && this.senha.trim() !== ''){
  alert("bem vindo!")
  }
  else{
    alert("Preencha todos os campos!")
  }
}

}
