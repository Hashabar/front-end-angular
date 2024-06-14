import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {

  private apiUrl = 'http://127.0.0.1:8000/api/championships/matches';

  constructor(private http: HttpClient) { }

  getMatches(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
