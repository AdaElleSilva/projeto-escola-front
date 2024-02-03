import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Aluno } from '../models/aluno';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

   
  private apiUrl = 'http://localhost:8080/alunos';

  constructor(private http: HttpClient) { }

  listarTodos(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(this.apiUrl);
  }

  buscar(id: number): Observable<Aluno> {
    return this.http.get<Aluno>(`${this.apiUrl}/${id}`);
  }

  adicionar(eleitor: Aluno): Observable<Aluno> {
    return this.http.post<Aluno>(this.apiUrl, eleitor);
  }

  atualizar(id: number, eleitor: Aluno): Observable<Aluno> {
    return this.http.put<Aluno>(`${this.apiUrl}/${id}`, eleitor);
  }

  deletar(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
