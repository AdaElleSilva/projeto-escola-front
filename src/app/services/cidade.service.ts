import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cidade } from '../models/cidade';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  private apiUrl = 'http://localhost:8080/cidades';

  constructor(private http: HttpClient) { }

  listarTodos(): Observable<Cidade[]> {
    return this.http.get<Cidade[]>(this.apiUrl);
  }

  buscar(id: number): Observable<Cidade> {
    return this.http.get<Cidade>(`${this.apiUrl}/${id}`);
  }

  adicionar(eleitor: Cidade): Observable<Cidade> {
    return this.http.post<Cidade>(this.apiUrl, eleitor);
  }

  atualizar(id: number, eleitor: Cidade): Observable<Cidade> {
    return this.http.put<Cidade>(`${this.apiUrl}/${id}`, eleitor);
  }

  deletar(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
