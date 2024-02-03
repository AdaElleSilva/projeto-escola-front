import { Injectable } from '@angular/core';
import { Escola } from '../models/escola';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EscolaService {

  
  private apiUrl = 'http://localhost:8080/escolas';

  constructor(private http: HttpClient) { }

  listarTodos(): Observable<Escola[]> {
    return this.http.get<Escola[]>(this.apiUrl);
  }

  buscar(id: number): Observable<Escola> {
    return this.http.get<Escola>(`${this.apiUrl}/${id}`);
  }

  adicionar(eleitor: Escola): Observable<Escola> {
    return this.http.post<Escola>(this.apiUrl, eleitor);
  }

  atualizar(id: number, eleitor: Escola): Observable<Escola> {
    return this.http.put<Escola>(`${this.apiUrl}/${id}`, eleitor);
  }

  deletar(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
