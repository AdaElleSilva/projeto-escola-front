import { Injectable } from '@angular/core';
import { Matricula } from '../models/matricula';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MatriculaService {

  private apiUrl = 'http://localhost:8080/matriculas';

  constructor(private http: HttpClient) { }

  listarTodos(): Observable<Matricula[]> {
    return this.http.get<Matricula[]>(this.apiUrl);
  }

  buscar(id: number): Observable<Matricula> {
    return this.http.get<Matricula>(`${this.apiUrl}/${id}`);
  }

  adicionar(eleitor: Matricula): Observable<Matricula> {
    return this.http.post<Matricula>(this.apiUrl, eleitor);
  }

  atualizar(id: number, eleitor: Matricula): Observable<Matricula> {
    return this.http.put<Matricula>(`${this.apiUrl}/${id}`, eleitor);
  }

  deletar(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
