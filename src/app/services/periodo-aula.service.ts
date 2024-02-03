import { Injectable } from '@angular/core';
import { PeriodoAula } from '../models/periodo-aula';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeriodoAulaService {

  private apiUrl = 'http://localhost:8080/periodosAula';

  constructor(private http: HttpClient) { }

  listarTodos(): Observable<PeriodoAula[]> {
    return this.http.get<PeriodoAula[]>(this.apiUrl);
  }

  buscar(id: number): Observable<PeriodoAula> {
    return this.http.get<PeriodoAula>(`${this.apiUrl}/${id}`);
  }

  adicionar(eleitor: PeriodoAula): Observable<PeriodoAula> {
    return this.http.post<PeriodoAula>(this.apiUrl, eleitor);
  }

  atualizar(id: number, eleitor: PeriodoAula): Observable<PeriodoAula> {
    return this.http.put<PeriodoAula>(`${this.apiUrl}/${id}`, eleitor);
  }

  deletar(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
