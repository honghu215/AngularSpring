import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorageService } from './../auth/token-storage.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  private url = 'http://localhost:5000/api/auth/resource';

  constructor(private token: TokenStorageService,
    private http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + this.token.getToken()})};

  getAbout(): any {
    return this.http.get(this.url, this.httpOptions);
  }
}
