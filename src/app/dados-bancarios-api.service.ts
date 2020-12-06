import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DadosBancarios } from 'src/model/DadosBancarios';

@Injectable({
  providedIn: 'root'
})
export class DadosBancariosApiService {

  constructor(private http: HttpClient) { }

  getDadosBancarios(id: number){
    return this.http.get<DadosBancarios>(`${environment.prestadorApiUrl}/api/DadosBancarios?id=${id}`);
  }

  postDadosBancarios(data: DadosBancarios, dadosBancariosId: number) {
    return this.http.post<DadosBancarios>(`${environment.prestadorApiUrl}/api/DadosBancarios/${dadosBancariosId}`, data);
  }

  putDadosBancarios(data: DadosBancarios) {
    return this.http.put<DadosBancarios>(`${environment.prestadorApiUrl}/api/DadosBancarios`, data);
  }

  deleteDadosBancarios(id: number) {
    return this.http.delete(`${environment.prestadorApiUrl}/api/DadosBancarios?id=${id}`);
  }
}
