import { Injectable } from '@angular/core';
import { Professor } from '../models/professor';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  private apiUrl = 'http://localhost:8080/professores';

  constructor(private http: HttpClient) { }

  listarTodos(): Observable<Professor[]> {
    return this.http.get<Professor[]>(this.apiUrl);
  }

  buscar(id: number): Observable<Professor> {
    return this.http.get<Professor>(`${this.apiUrl}/${id}`);
  }

  adicionar(eleitor: Professor): Observable<Professor> {
    return this.http.post<Professor>(this.apiUrl, eleitor);
  }

  atualizar(id: number, eleitor: Professor): Observable<Professor> {
    return this.http.put<Professor>(`${this.apiUrl}/${id}`, eleitor);
  }

  deletar(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
