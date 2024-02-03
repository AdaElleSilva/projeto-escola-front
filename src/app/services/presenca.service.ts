import { Injectable } from '@angular/core';
import { Presenca } from '../models/presenca';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PresencaService {

  private apiUrl = 'http://localhost:8080/presencas';

  constructor(private http: HttpClient) { }

  listarTodos(): Observable<Presenca[]> {
    return this.http.get<Presenca[]>(this.apiUrl);
  }

  buscar(id: number): Observable<Presenca> {
    return this.http.get<Presenca>(`${this.apiUrl}/${id}`);
  }

  adicionar(eleitor: Presenca): Observable<Presenca> {
    return this.http.post<Presenca>(this.apiUrl, eleitor);
  }

  atualizar(id: number, eleitor: Presenca): Observable<Presenca> {
    return this.http.put<Presenca>(`${this.apiUrl}/${id}`, eleitor);
  }

  deletar(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
