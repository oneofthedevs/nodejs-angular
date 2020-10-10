import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'any'
})
export class AuthService {

  baseURL = 'http://localhost:3000/user/';
  constructor(private http: HttpClient) { }

  // Login
  async login(object: any): Promise<any> {
    return this.http.post(`${this.baseURL}login`, object).toPromise();
  }

  // Register
  async register(object: any): Promise<any> {
    return this.http.post(`${this.baseURL}register`, object).toPromise();
  }

}
