import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  getCards(pageNumber: number, pageSize: number): Observable<any> {
    return this.httpClient.get(`https://api.pokemontcg.io/v2/cards?page=${pageNumber}&pageSize=${pageSize}`)
  }
}
