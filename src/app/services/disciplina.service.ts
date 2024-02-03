import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Disciplina } from '../models/disciplina';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService { 
  
  private apiUrl = 'http://localhost:8080/disciplinas';

  constructor(private http: HttpClient) { }

  listarTodos(): Observable<Disciplina[]> {
    return this.http.get<Disciplina[]>(this.apiUrl);
  }

  buscar(id: number): Observable<Disciplina> {
    return this.http.get<Disciplina>(`${this.apiUrl}/${id}`);
  }

  adicionar(eleitor: Disciplina): Observable<Disciplina> {
    return this.http.post<Disciplina>(this.apiUrl, eleitor);
  }

  atualizar(id: number, eleitor: Disciplina): Observable<Disciplina> {
    return this.http.put<Disciplina>(`${this.apiUrl}/${id}`, eleitor);
  }

  deletar(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
