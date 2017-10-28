import {Component, OnInit, ElementRef, ViewChild, Inject} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {MatFormField, MatInput, MatFormFieldControl} from '@angular/material';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {MatPaginator} from '@angular/material';
import {Observable} from 'rxjs/Observable';
import {Http, Response, Headers } from '@angular/http';
import {MessagesService} from './messages.service';
import {Message} from './message';
import {NgForm} from '@angular/forms';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';
declare var jquery :any;
declare var $: any;

import { environment } from '../../environments/environment';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
  providers: [MessagesService]
})
export class MessagesComponent implements OnInit {
  message: Message[] = [];
  displayedColumns = ['title', 'content', 'read'];
  dataSource: MessageDataSource;

  model = new Message();

  submitted = false;

   onSubmit(messageForm: NgForm) { console.log(messageForm.value); this.addNewMessage(messageForm.value);}
   addNewMessage(data: any) {
      this.onAddMessage(data);
   }

   get diagnostic() { return JSON.stringify(this.model); }

  constructor(private _messagesService: MessagesService) {

  }

  ngOnInit() {
    this._messagesService
    .getAllMessages()
    .subscribe(
      (message) => {
        this.message = message;
        this.dataSource = new MessageDataSource(this.message);
      }
    );
  }

  openDialog(): void {
    $('#newMessageForm').toggle();
    $('#addMessage').hide();
  }

  hideDialog(): void {
    $('#newMessageForm').toggle();
    $('#addMessage').show();
  }

  onAddMessage(message) {
    this._messagesService
      .createMessage(message)
      .subscribe(
        (newMessage) => {
          this.message = this.message.concat(newMessage);
          location.reload();
        }
      );
    }
}


export class MessageDataSource extends DataSource<Message> {
    constructor(private messages: Message[]) {
      super();
    }

    connect(): Observable<Message[]> {
      return Observable.of(this.messages);
    }
    disconnect() {}
}
