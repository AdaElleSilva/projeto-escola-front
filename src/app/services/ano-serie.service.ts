import { Injectable } from '@angular/core';
import { AnoSerie } from '../models/ano-serie';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnoSerieService {

  private apiUrl = 'http://localhost:8080/anoserie';

  constructor(private http: HttpClient) { }

  listarTodos(): Observable<AnoSerie[]> {
    return this.http.get<AnoSerie[]>(this.apiUrl);
  }

  buscar(id: string): Observable<AnoSerie> {
    return this.http.get<AnoSerie>(`${this.apiUrl}/${id}`);
  }

  adicionar(eleitor: AnoSerie): Observable<AnoSerie> {
    return this.http.post<AnoSerie>(this.apiUrl, eleitor);
  }

  atualizar(id: string, eleitor: AnoSerie): Observable<AnoSerie> {
    return this.http.put<AnoSerie>(`${this.apiUrl}/${id}`, eleitor);
  }

  deletar(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
