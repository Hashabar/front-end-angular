import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Team } from './teams.model';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
    private apiUrl = 'http://127.0.0.1:8000/api/teams';
    
    constructor(private http: HttpClient) {}
    
    getTeams(): Observable<Team[]> {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      // return this.http.get<Team[]>(this.apiUrl, { headers });
      return this.http.get<{ success: boolean, data: Team[] }>(this.apiUrl).pipe(
        map(response => response.data))
    }
  }
