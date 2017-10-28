import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NbThemeModule } from '@nebular/theme';
import { NbSidebarModule, NbLayoutModule, NbSidebarService } from '@nebular/theme';
import { HttpModule } from '@angular/http';
import { AppRoutingModule, routingComponents } from './app.routing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { KidsComponent } from './kids/kids.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import {MatTableModule, MatButtonModule, MatSnackBarModule} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    KidsComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbSidebarModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  providers: [NbSidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
