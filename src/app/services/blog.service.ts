import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:3000/blog';

  // create a blog
  createBlog(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

  // get all blogs
  getAllBlogs(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  getLastBlogs(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  // get a blog
  getABlog(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  // delete a blog
  deleteBlog(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  // update a blog
  updateBlog(data: any, id: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }
}
