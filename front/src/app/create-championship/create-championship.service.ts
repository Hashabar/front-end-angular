import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class createChampionshipSend {

    private apiUrl = 'http://127.0.0.1:8000/api/championships';
  
    constructor(private http: HttpClient) { }
  
    postMatches(newChampionship: any): Observable<any> {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
      return this.http.post<any>(this.apiUrl, { newChampionship }, httpOptions);
    }
  }