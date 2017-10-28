import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import { Http, Response, Headers } from '@angular/http';
import {KidsService} from './kids.service';
import {MatSnackBar} from '@angular/material';
import {Kid} from './kid';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';

import { environment } from '../../environments/environment';


@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css'],
  providers: [KidsService]
})
export class KidsComponent implements OnInit {
  kid: Kid[] = [];
  displayedColumns = ['name', 'age', 'desc', 'cashNow'];
  public message: string;
  public values: any[];
  dataSource: KidDataSource;

  constructor(private _kidsService: KidsService, public _snackBar: MatSnackBar) {

  }

  ngOnInit() {
    this._kidsService
    .getAllKids()
    .subscribe(
      (kid) => {
        this.kid = kid;
        this.dataSource = new KidDataSource(this.kid);
      }
    );
  }

  onAddKid(kid) {
    this._kidsService
      .createKid(kid)
      .subscribe(
        (newKid) => {
          this.kid = this.kid.concat(newKid);
        }
      );
  }
}


export class KidDataSource extends DataSource<Kid> {

    constructor(private kids: Kid[]) {
      super();
    }

    connect(): Observable<Kid[]> {
      return Observable.of(this.kids);
    }

    disconnect() {}
}
/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream. In our case here,
 * we return a stream that contains only one set of data that doesn't change.
 */

@Component({
  selector: 'app-data-loaded',
  templateUrl: 'data-loaded-snack.html',
  styleUrls: ['./kids.component.css']
})
export class DataLoadedComponent {}
