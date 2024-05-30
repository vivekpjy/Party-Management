import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,catchError,of } from 'rxjs';


interface Party {
  id: number;
  name: string;
  location: string;
}
@Injectable({
  providedIn: 'root'
})
export class PartyService {
  private baseUrl = 'https://ap.greatfuturetechno.com/';

  constructor(private http: HttpClient) { }

  getParties(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl)
      .pipe(catchError(this.handleError<any[]>('getParties', [])));
  }

  getPartyById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}?id=${id}`)
      .pipe(catchError(this.handleError<any>('getPartyById')));
  }

  addParty(party: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, party)
      .pipe(catchError(this.handleError<any>('addParty')));
  }

  updateParty(id: number, party: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}?id=${id}`, party)
      .pipe(catchError(this.handleError<any>('updateParty')));
  }

  deleteParty(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}?id=${id}`)
      .pipe(catchError(this.handleError<any>('deleteParty')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
