import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Response } from '@angular/http';
import { Kid } from './kid';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class KidsService {

  constructor(
    private http: Http
  ) {
  }

  public getAllKids(): Observable<Kid[]> {
    return this.http
      .get(API_URL + '/kids')
      .map(response => {
        const kids = response.json();
        return kids.map((kid) => new Kid(kid));
      })
      .catch(this.handleError);
  }

  public createKid(kid: Kid): Observable<Kid> {
    return this.http
      .post(API_URL + '/kids', kid)
      .map(response => {
        return new Kid(response.json());
      })
      .catch(this.handleError);
  }

  public getKidsById(kidId: string): Observable<Kid> {
    return this.http
      .get(API_URL + '/kids/' + kidId)
      .map(response => {
        return new Kid(response.json());
      })
      .catch(this.handleError);
  }

  public updateKids(kid: Kid): Observable<Kid> {
    return this.http
      .post(API_URL + '/kids', kid)
      .map(response => {
        return new Kid(response.json());
      })
      .catch(this.handleError);
  }

  public deleteKidsById(kidId: string): Observable<null> {
    return this.http
      .delete(API_URL + '/kids', kidId)
      .map(response => null)
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('KidsService::handleError', error);
    return Observable.throw(error);
  }
}
