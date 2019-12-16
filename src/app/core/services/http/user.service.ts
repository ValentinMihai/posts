import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { User } from 'src/app/shared/models/user.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {

  constructor(private http: HttpClient) { 
    super();
  }

  getUser(id): Observable<User> {
    return this.http.get<User>(super.baseUrl + '/users/' + id)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }  

}
