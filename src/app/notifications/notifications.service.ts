import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Response } from '@angular/http';
import { Notification } from './notification';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class NotificationsService {

  constructor(
    private http: Http
  ) {
  }

  public getAllNotifications(): Observable<Notification[]> {
    return this.http
      .get(API_URL + '/notifications')
      .map(response => {
        const notifications = response.json();
        return notifications.map((notification) => new Notification(notification));
      })
      .catch(this.handleError);
  }

  public createNotification(notification: Notification): Observable<Notification> {
    return this.http
      .post(API_URL + '/notifications', notification)
      .map(response => {
        return new Notification(response.json());
      })
      .catch(this.handleError);
  }

  public getNotificationsById(notificationId: string): Observable<Notification> {
    return this.http
      .get(API_URL + '/notifications/' + notificationId)
      .map(response => {
        return new Notification(response.json());
      })
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('NotificationsService::handleError', error);
    return Observable.throw(error);
  }
}
