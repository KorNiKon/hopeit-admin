import {Component, OnInit, ElementRef, ViewChild, Inject} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {Http, Response, Headers } from '@angular/http';
import {UserService} from './users.service';
import {MatSnackBar} from '@angular/material';
import {User} from './user';
import {NgForm} from '@angular/forms';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService]
})
export class UsersComponent implements OnInit {
  user: User[] = [];
  displayedColumns = ['name', 'email', 'donations'];
  public message: string;
  public values: any[];
  dataSource: UserDataSource;

  model = new User();


  constructor(private _usersService: UserService) {

  }

  ngOnInit() {
    this._usersService
    .getAllUsers()
    .subscribe(
      (user) => {
        this.user = user;
        this.dataSource = new UserDataSource(this.user);
      }
    );
  }

}


export class UserDataSource extends DataSource<User> {

    constructor(private users: User[]) {
      super();
    }

    connect(): Observable<User[]> {
      return Observable.of(this.users);
    }

    disconnect() {}
}
