import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Response } from '@angular/http';
import { User } from './user';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class UserService {

  constructor(
    private http: Http
  ) {
  }

  public getAllUsers(): Observable<User[]> {
    return this.http
      .get(API_URL + '/android-users')
      .map(response => {
        const user = response.json();
        return user.map((user) => new User(user));
      })
      .catch(this.handleError);
  }

  public createUser(user: User): Observable<User> {
    return this.http
      .post(API_URL + '/android-users', user)
      .map(response => {
        return new User(response.json());
      })
      .catch(this.handleError);
  }

  public getUserById(userId: string): Observable<User> {
    return this.http
      .get(API_URL + '/android-users/' + userId)
      .map(response => {
        return new User(response.json());
      })
      .catch(this.handleError);
  }

  public updateUser(user: User): Observable<User> {
    return this.http
      .post(API_URL + '/android-users', user)
      .map(response => {
        return new User(response.json());
      })
      .catch(this.handleError);
  }

  public deleteUserById(userId: string): Observable<null> {
    return this.http
      .delete(API_URL + '/android-users', userId)
      .map(response => null)
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('UserService::handleError', error);
    return Observable.throw(error);
  }
}
