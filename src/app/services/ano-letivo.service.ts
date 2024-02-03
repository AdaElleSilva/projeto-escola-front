import { Injectable } from '@angular/core';
import { AnoLetivo } from '../models/ano-letivo';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnoLetivoService {

  private apiUrl = 'http://localhost:8080/anoletivo';

  constructor(private http: HttpClient) { }

  listarTodos(): Observable<AnoLetivo[]> {
    return this.http.get<AnoLetivo[]>(this.apiUrl);
  }

  buscar(id: number): Observable<AnoLetivo> {
    return this.http.get<AnoLetivo>(`${this.apiUrl}/${id}`);
  }

  adicionar(eleitor: AnoLetivo): Observable<AnoLetivo> {
    return this.http.post<AnoLetivo>(this.apiUrl, eleitor);
  }

  atualizar(id: number, eleitor: AnoLetivo): Observable<AnoLetivo> {
    return this.http.put<AnoLetivo>(`${this.apiUrl}/${id}`, eleitor);
  }

  deletar(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
