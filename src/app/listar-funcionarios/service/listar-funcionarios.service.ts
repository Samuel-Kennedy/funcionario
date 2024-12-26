import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListarFuncionariosService {
  private apiUrl = 'http://localhost:3000/api/funcionarios'; // URL da sua API

  constructor(private http: HttpClient) { }


  getFuncionarios(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
