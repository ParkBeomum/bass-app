import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Board } from '../models/index';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BoardService {

  constructor(private http: Http) { }

  // Get all posts from the API
  getAllPosts():Promise<Board[]> {
    return this.http.get('/api/board')
    .toPromise()
    .then(response => response.json() as Board[] )
    .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
   console.error('An error occurred', error);
   return Promise.reject(error.message || error);
 }

}
