import { Injectable } from '@angular/core';
import { ProfessorTurma } from '../models/professor-turma';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfessorTurmaService {

  private apiUrl = 'http://localhost:8080/professorTurmas';

  constructor(private http: HttpClient) { }

  listarTodos(): Observable<ProfessorTurma[]> {
    return this.http.get<ProfessorTurma[]>(this.apiUrl);
  }

  buscar(id: number): Observable<ProfessorTurma> {
    return this.http.get<ProfessorTurma>(`${this.apiUrl}/${id}`);
  }

  adicionar(eleitor: ProfessorTurma): Observable<ProfessorTurma> {
    return this.http.post<ProfessorTurma>(this.apiUrl, eleitor);
  }

  atualizar(id: number, eleitor: ProfessorTurma): Observable<ProfessorTurma> {
    return this.http.put<ProfessorTurma>(`${this.apiUrl}/${id}`, eleitor);
  }

  deletar(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
