import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css'],
  template: `
      <nb-layout>
        <nb-layout-header fixed>Company Name</nb-layout-header>

        <nb-sidebar>Sidebar Content</nb-sidebar>

        <nb-layout-column>Page Content</nb-layout-column>
      </nb-layout>
    `
})
export class KidsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
