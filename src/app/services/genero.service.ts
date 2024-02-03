import { Injectable } from '@angular/core';
import { Genero } from '../models/genero';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  private apiUrl = 'http://localhost:8080/generos';

  constructor(private http: HttpClient) { }

  listarTodos(): Observable<Genero[]> {
    return this.http.get<Genero[]>(this.apiUrl);
  }

  buscar(id: number): Observable<Genero> {
    return this.http.get<Genero>(`${this.apiUrl}/${id}`);
  }

  adicionar(eleitor: Genero): Observable<Genero> {
    return this.http.post<Genero>(this.apiUrl, eleitor);
  }

  atualizar(id: number, eleitor: Genero): Observable<Genero> {
    return this.http.put<Genero>(`${this.apiUrl}/${id}`, eleitor);
  }

  deletar(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
