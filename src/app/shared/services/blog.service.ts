import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog } from '../models/blog';

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
    console.log('in Service');
    return await this.http.post(this.baseURL, object).toPromise();
  }

  async Put(object: Blog, id: string): Promise<any> {
    return await this.http.put(`${this.baseURL}${id}`, object).toPromise();

  }
  async Delete(id: string): Promise<any> {
    return await this.http.delete(`${this.baseURL}${id}`).toPromise();
  }
}
