import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ContentModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  private API_BASE_URL = 'https//test.com';

  constructor(private http: HttpClient) { }

  getFeed(): Observable<ContentModel[]> {
    return this.http
      .get<Array<ContentModel>>(`${this.API_BASE_URL}/home-feed/all`)
      .pipe(map(result => result));
  }
}
