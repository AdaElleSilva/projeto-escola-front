import { Injectable } from '@angular/core';
import { HorarioAula } from '../models/horario-aula';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HorarioAulaService {

  private apiUrl = 'http://localhost:8080/horarios';

  constructor(private http: HttpClient) { }

  listarTodos(): Observable<HorarioAula[]> {
    return this.http.get<HorarioAula[]>(this.apiUrl);
  }

  buscar(id: number): Observable<HorarioAula> {
    return this.http.get<HorarioAula>(`${this.apiUrl}/${id}`);
  }

  adicionar(eleitor: HorarioAula): Observable<HorarioAula> {
    return this.http.post<HorarioAula>(this.apiUrl, eleitor);
  }

  atualizar(id: number, eleitor: HorarioAula): Observable<HorarioAula> {
    return this.http.put<HorarioAula>(`${this.apiUrl}/${id}`, eleitor);
  }

  deletar(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
