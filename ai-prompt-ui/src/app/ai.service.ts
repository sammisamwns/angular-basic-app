import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AiService {
  private apiUrl = 'http://localhost:5000/generate'; // Your Flask route

  constructor(private http: HttpClient) {}

  sendPrompt(prompt: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { prompt });
  }
} 