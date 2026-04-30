import { Injectable } from '@angular/core';
import { Produto } from '../model/tipos';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
    private API:string = "http://127.0.0.1:3000/produtos"
    constructor(private http: HttpClient){ }

    listar(): Observable<Produto[]>{
        return this.http.get<Produto[]>(this.API)
    }
    buscarPorId(id: string): Observable<Produto | undefined> {
    return this.http.get<Produto>(this.API + `/${id}`);
    }
    incluir(pessoa: Produto): Observable<Produto>{
      return this.http.post<Produto>(this.API, pessoa)
    }
    editar(pessoa: Produto): Observable<Produto>{
      const url = `${this.API}/${pessoa.id}`
      return this.http.put<Produto>(url, pessoa)
    }
    excluir(id: number): Observable<Produto>{
      return this.http.delete<Produto>(this.API + `/${id}`);
}
}
