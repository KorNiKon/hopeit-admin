import {Component, OnInit, ElementRef, ViewChild, Inject} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {MatFormField, MatInput, MatFormFieldControl} from '@angular/material';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {Http, Response, Headers } from '@angular/http';
import {KidsService} from './kids.service';
import {MatSnackBar} from '@angular/material';
import {Kid} from './kid';
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
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css'],
  providers: [KidsService]
})
export class KidsComponent implements OnInit {
  kid: Kid[] = [];
  displayedColumns = ['name', 'age', 'desc', 'cashNow', 'cashTarget'];
  public message: string;
  public values: any[];
  dataSource: KidDataSource;

  model = new Kid();

  submitted = false;

   onSubmit(kidForm: NgForm) { console.log(kidForm.value); this.addNewKid(kidForm.value);}

   addNewKid(data: any) {
      this.onAddKid(data);
   }

   get diagnostic() { return JSON.stringify(this.model); }

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

  openDialog(): void {
    $('#newKidForm').toggle();
    $('#addKid').toggle();
  }

  onAddKid(kid) {
    this._kidsService
      .createKid(kid)
      .subscribe(
        (newKid) => {
          this.kid = this.kid.concat(newKid);
          location.reload();
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
  selector: 'app-snack-bar',
  templateUrl: 'snack-bar.html',
})
export class SnackBarComponent {
  constructor(public snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
