import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Championship } from './championship.model';

@Injectable({
  providedIn: 'root'
})
export class ChampionshipService {
    private apiUrl = 'http://127.0.0.1:8000/api/championships';
    
    constructor(private http: HttpClient) {}
    
    getChampionships(): Observable<Championship[]> {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      // return this.http.get<Championship[]>(this.apiUrl, { headers });
      return this.http.get<{ success: boolean, data: Championship[] }>(this.apiUrl).pipe(
        map(response => response.data))
    }
  }
