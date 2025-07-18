import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:10000';

  constructor(private http: HttpClient) {}

  getSubmission(name: string, email: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/submit/${name}/${email}`);
  }

  postSubmission(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/submit`, data);
  }
}
