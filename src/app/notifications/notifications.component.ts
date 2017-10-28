import {Component, OnInit, ElementRef, ViewChild, Inject} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {MatFormField, MatInput, MatFormFieldControl} from '@angular/material';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {MatPaginator} from '@angular/material';
import {Observable} from 'rxjs/Observable';
import {Http, Response, Headers } from '@angular/http';
import {NotificationsService} from './notifications.service';
import {Notification} from './notification';
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
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
  providers: [NotificationsService]
})
export class NotificationsComponent implements OnInit {
  notification: Notification[] = [];
  displayedColumns = ['title'];
  dataSource: NotificationDataSource;

  model = new Notification();

  submitted = false;

   onSubmit(notificationForm: NgForm) { console.log(notificationForm.value); this.addNewNotification(notificationForm.value); }
   addNewNotification(data: any) {
      this.onAddNotification(data);
   }

   get diagnostic() { return JSON.stringify(this.model); }

  constructor(private _notificationsService: NotificationsService) {

  }

  ngOnInit() {
    this._notificationsService
    .getAllNotifications()
    .subscribe(
      (notification) => {
        this.notification = notification;
        this.dataSource = new NotificationDataSource(this.notification);
      }
    );
  }

  openDialog(): void {
    $('#newNotificationForm').toggle();
    $('#addNotification').hide();
  }

  hideDialog(): void {
    $('#newNotificationForm').toggle();
    $('#addNotification').show();
  }

  onAddNotification(notifications) {
    this._notificationsService
      .createNotification(notifications)
      .subscribe(
        (newNotifications) => {
          this.notification = this.notification.concat(newNotifications);
          location.reload();
        }
      );
    }
}


export class NotificationDataSource extends DataSource<Notification> {
    constructor(private notifications: Notification[]) {
      super();
    }

    connect(): Observable<Notification[]> {
      return Observable.of(this.notifications);
    }
    disconnect() {}
}
