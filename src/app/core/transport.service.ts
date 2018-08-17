import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { HeadersService } from './headers.service';

@Injectable()
export class TransportService extends HeadersService {

  protected baseUrl: string;

  constructor(
    private http: HttpClient
  ) {
    super();
    this.baseUrl = environment.API_URL;
  }

  get(resource, queryData?: HttpParams, fullResponse: boolean = false): Observable<any> {
    return this.http.get(this.baseUrl + resource, <any>{
      headers: this.headers,
      params: queryData,
      observe: fullResponse ? 'response' : 'body'
    });
  }

  post(resource, body?, queryData?: HttpParams): Observable<any> {
    return this.http.post(this.baseUrl + resource, body, { headers: this.headers, params: queryData });
  }

  put(resource, body, queryData?: HttpParams): Observable<any> {
    return this.http.put(this.baseUrl + resource, body, { headers: this.headers, params: queryData });
  }

  delete(resource): Observable<any> {
    return this.http.delete(this.baseUrl + resource, { headers: this.headers });
  }
}
