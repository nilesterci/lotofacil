import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  public numbers() {
    try {
      return this.http
        .get<any>('https://nilmar.ml/loto/');
    } catch (error) {
      throw error;
    }
  }

}
