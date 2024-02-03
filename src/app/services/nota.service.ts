import { Injectable } from '@angular/core';
import { Nota } from '../models/nota';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotaService {

  private apiUrl = 'http://localhost:8080/notas';

  constructor(private http: HttpClient) { }

  listarTodos(): Observable<Nota[]> {
    return this.http.get<Nota[]>(this.apiUrl);
  }

  buscar(id: number): Observable<Nota> {
    return this.http.get<Nota>(`${this.apiUrl}/${id}`);
  }

  adicionar(eleitor: Nota): Observable<Nota> {
    return this.http.post<Nota>(this.apiUrl, eleitor);
  }

  atualizar(id: number, eleitor: Nota): Observable<Nota> {
    return this.http.put<Nota>(`${this.apiUrl}/${id}`, eleitor);
  }

  deletar(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
