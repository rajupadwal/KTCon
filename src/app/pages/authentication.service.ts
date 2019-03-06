
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { APP_CONSTANT } from '../../config';
import { UserInfo } from '../models/user.info.model';

@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient) { }

  login(userInfo: UserInfo) {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    let body = JSON.stringify(userInfo);
    return this.http.post<UserInfo>(APP_CONSTANT.USER_APIS.LOGIN, body, httpOptions )
      .pipe(map((user:UserInfo) => {
        // login successful if there's a jwt token in the response
        if (user) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }


}


