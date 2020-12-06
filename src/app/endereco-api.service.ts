import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Endereco } from 'src/model/Endereco';

@Injectable({
  providedIn: 'root'
})
export class EnderecoApiService {

  constructor(private http: HttpClient) { }

  getEndereco(id: number){
    return this.http.get<Endereco>(`${environment.prestadorApiUrl}/api/Endereco?id=${id}`);
  }

  postEndereco(data: Endereco, prestadorId: number) {
    return this.http.post<Endereco>(`${environment.prestadorApiUrl}/api/Endereco/${prestadorId}`, data);
  }

  putEndereco(data: Endereco) {
    return this.http.put<Endereco>(`${environment.prestadorApiUrl}/api/Endereco`, data);
  }

  deleteEndereco(id: number) {
    return this.http.delete<string>(`${environment.prestadorApiUrl}/api/Endereco?id=${id}`);
  }
}