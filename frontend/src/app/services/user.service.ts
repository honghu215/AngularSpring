import { TokenStorageService } from './../auth/token-storage.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'http://localhost:5000/api/test/user';
  private adminUrl = 'http://localhost:5000/api/auth/admin';
  private adminTestUrl = 'http://localhost:5000/api/test/admin';

  constructor(private http: HttpClient,
              private token: TokenStorageService) { }

  private httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + this.token.getToken()})};

  getUserBoard(): Observable<string> {
    return this.http.get(this.userUrl, { responseType: 'text' });
  }

  getAdminBoard(): Observable<string> {
    return this.http.get(this.adminTestUrl, { responseType: 'text' });
  }

  getUserList(): any {
    return this.http.get(this.adminUrl + '/users', this.httpOptions);
  }

  deleteUser(userId) {
    return this.http.get(this.adminUrl + 'deleteUser', {params: new HttpParams().set('userId', userId)});
  }
}

export interface User {
  id: number;
  name: string;
  email: string;
  username: string;
  roles: {
    id: number;
    name: string;
  };
}
