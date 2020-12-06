import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Prestador } from 'src/model/Prestador';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PrestadorApiService {

  
  constructor(private http: HttpClient) { }

  getPrestadorList(){
    return this.http.get<Prestador[]>(`${environment.prestadorApiUrl}/api/Prestador/List`);
  }

  getPrestador(id: number){
    return this.http.get<Prestador>(`${environment.prestadorApiUrl}/api/Prestador?id=${id}`);
  }

  postPrestador(data: Prestador) {
    console.log(data)
    return this.http.post(`${environment.prestadorApiUrl}/api/Prestador`, data);
  }

  putPrestador(data: Prestador) {
    return this.http.put<Prestador>(`${environment.prestadorApiUrl}/api/Prestador`, data);
  }

  deletePrestador(id: number) {
    return this.http.delete<string>(`${environment.prestadorApiUrl}/api/Prestador?id=${id}`);
  }
}
