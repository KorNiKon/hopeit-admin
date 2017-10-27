import { Component } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: any = null;

    constructor(private _http: Http) {
      this.getKids();
    }

    private getKids() {
      return this._http.get('http://10.99.130.89:8080/kids')
        .map((res: Response) => res.json())
          .subscribe(data => {
                this.data = data;
                console.log(this.data);
        });
    }

  }
