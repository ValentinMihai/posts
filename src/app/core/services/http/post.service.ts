import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { BaseService } from './base.service';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PostService extends BaseService {

  constructor(private http: HttpClient) { 
    super();
  }

  getPosts(titleSearchValue, bodySearchValue, pageIndex, pageSize): Observable<any> {

    let url = super.baseUrl + '/posts';
    url += `?_expand=user&title_like=${titleSearchValue}&body_like=${bodySearchValue}&_page=${pageIndex + 1}&_limit=${pageSize}`;
    
    return this.http.get(url, { observe: 'response' })
      .pipe(
        retry(1),
        catchError(super.errorHandler)
      )
  }
}
