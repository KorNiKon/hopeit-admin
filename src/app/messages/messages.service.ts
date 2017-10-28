import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Response } from '@angular/http';
import { Message } from './message';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class MessagesService {

  constructor(
    private http: Http
  ) {
  }

  public getAllMessages(): Observable<Message[]> {
    return this.http
      .get(API_URL + '/messages')
      .map(response => {
        const messages = response.json();
        return messages.map((message) => new Message(message));
      })
      .catch(this.handleError);
  }

  public createMessage(message: Message): Observable<Message> {
    return this.http
      .post(API_URL + '/messages', message)
      .map(response => {
        return new Message(response.json());
      })
      .catch(this.handleError);
  }

  public getMessagesById(messageId: string): Observable<Message> {
    return this.http
      .get(API_URL + '/messages/' + messageId)
      .map(response => {
        return new Message(response.json());
      })
      .catch(this.handleError);
  }

  public updateMessages(message: Message): Observable<Message> {
    return this.http
      .post(API_URL + '/messages', message)
      .map(response => {
        return new Message(response.json());
      })
      .catch(this.handleError);
  }

  public deleteMessagesById(messageId: string): Observable<null> {
    return this.http
      .delete(API_URL + '/messages', messageId)
      .map(response => null)
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('MessagesService::handleError', error);
    return Observable.throw(error);
  }
}
