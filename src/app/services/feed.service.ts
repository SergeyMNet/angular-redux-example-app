import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ContentModel } from '../models';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  private baseUrl: String;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl;
  }

  getFeed(): Observable<ContentModel[]> {

    const url = this.baseUrl + '/feed';

    return this.http
      .get<Array<ContentModel>>(url);
  }
}
