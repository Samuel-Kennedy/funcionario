import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastrarService {

  private apiUrl = 'http://localhost:3000/api/novo-usuario'; // URL do backend

  constructor(private http: HttpClient) { }

  salvarUsuario(usuario: any): Observable<any> {
    console.log(usuario)
    return this.http.post<any>(this.apiUrl, usuario);
  }

}
