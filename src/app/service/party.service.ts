import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


interface Party {
  id: number;
  name: string;
  location: string;
}
@Injectable({
  providedIn: 'root'
})
export class PartyService {
  private apiUrl = 'https://ap.greatfuturetechno.com/';

  constructor(private http: HttpClient) { }

  login(credentials: { username: string, password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login/`, credentials);
  }

  getParties(): Observable<Party[]> {
    return this.http.get<Party[]>(this.apiUrl);
  }

  addParty(party: Party): Observable<Party> {
    return this.http.post<Party>(this.apiUrl, party);
  }

  updateParty(party: Party): Observable<Party> {
    return this.http.put<Party>(`${this.apiUrl}/${party.id}`, party);
  }

  deleteParty(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
