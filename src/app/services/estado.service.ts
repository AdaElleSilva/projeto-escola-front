import { Injectable } from '@angular/core';
import { Estado } from '../models/estado';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  private apiUrl = 'http://localhost:8080/estados';

  constructor(private http: HttpClient) { }

  listarTodos(): Observable<Estado[]> {
    return this.http.get<Estado[]>(this.apiUrl);
  }

  buscar(id: number): Observable<Estado> {
    return this.http.get<Estado>(`${this.apiUrl}/${id}`);
  }

  adicionar(eleitor: Estado): Observable<Estado> {
    return this.http.post<Estado>(this.apiUrl, eleitor);
  }

  atualizar(id: number, eleitor: Estado): Observable<Estado> {
    return this.http.put<Estado>(`${this.apiUrl}/${id}`, eleitor);
  }

  deletar(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
