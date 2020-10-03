import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  baseURL = 'http://localhost:3000/blog/';

  constructor(private http: HttpClient) { }

  async fetchAll(): Promise<any> {
    return await this.http.get(this.baseURL).toPromise();
  }

  async fetchSigle(id: string): Promise<any> {
    return await this.http.get(`${this.baseURL}${id}`).toPromise();
  }

  async Post(object: object): Promise<any> {
    return await this.http.post(this.baseURL, object).toPromise();
  }

  async Put(object: object): Promise<any> {
    return await this.http.put(this.baseURL, object).toPromise();

  }
  async Delete(id: string): Promise<any> {
    return await this.http.delete(`${this.baseURL}${id}`).toPromise();
  }
}
