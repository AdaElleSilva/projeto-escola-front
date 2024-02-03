import { Injectable } from '@angular/core';
import { Turma } from '../models/turma';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TurmaService {

  private apiUrl = 'http://localhost:8080/turmas';

  constructor(private http: HttpClient) { }

  listarTodos(): Observable<Turma[]> {
    return this.http.get<Turma[]>(this.apiUrl);
  }

  buscar(id: number): Observable<Turma> {
    return this.http.get<Turma>(`${this.apiUrl}/${id}`);
  }

  adicionar(eleitor: Turma): Observable<Turma> {
    return this.http.post<Turma>(this.apiUrl, eleitor);
  }

  atualizar(id: number, eleitor: Turma): Observable<Turma> {
    return this.http.put<Turma>(`${this.apiUrl}/${id}`, eleitor);
  }

  deletar(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
