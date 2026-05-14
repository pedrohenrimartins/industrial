import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pessoa } from '../model/tipos';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private API = 'http://localhost:3000/pessoas';

  constructor(private http: HttpClient) { };

  login(email: string, senha: string): Observable<Pessoa | null> {
    console.log(this.http.get<Pessoa[]>(`${this.API}?email=${email}&senha=${senha}`).pipe(map(resultado => resultado[0] || null)))
    return this.http.get<Pessoa[]>(`${this.API}?email=${email}`).pipe(map(resultado => resultado[0] || null));
  }

  salvarSessao(pessoa: Pessoa): void {
    localStorage.setItem('usuarioLogado', JSON.stringify(pessoa));
  }

  getUsuario(): Pessoa | null {
    const dados = localStorage.getItem('usuarioLogado');
    return dados ? JSON.parse(dados) : null;
  }

  logout():void {
    localStorage.removeItem('usuarioLogado');
  }

  estalogado(): boolean{
    return !!this.getUsuario();
  }
}
