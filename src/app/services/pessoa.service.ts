import { Injectable } from '@angular/core';
import { Pessoa } from '../models/pessoa';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private apiUrl = 'http://localhost:8080/pessoas';

  constructor(private http: HttpClient) { }

  listarTodos(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.apiUrl);
  }

  buscar(id: number): Observable<Pessoa> {
    return this.http.get<Pessoa>(`${this.apiUrl}/${id}`);
  }

  adicionar(eleitor: Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(this.apiUrl, eleitor);
  }

  atualizar(id: number, eleitor: Pessoa): Observable<Pessoa> {
    return this.http.put<Pessoa>(`${this.apiUrl}/${id}`, eleitor);
  }

  deletar(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
