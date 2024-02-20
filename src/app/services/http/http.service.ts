import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  get(url: string) {
    return this.http.get<any>(url);
  }

  post(url: string, body: any) {
    return this.http.post<any>(url, body);
  }
}
