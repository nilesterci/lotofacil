import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LotofacilService {

  corsHeaders;

  constructor(private http: HttpClient) {
    this.corsHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '/'
    });
    //this.contents = '';
   }

  public numbers(sorteio?: string): Observable<any> {
    try {
      return this.http
        .get<any>(`https://servicebus2.caixa.gov.br/portaldeloterias/api/lotofacil/${sorteio ?? ""}`);
    } catch (error) {
      throw error;
    }
  }

}
