import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KidsComponent } from './kids.component';
import { DataLoadedComponent } from './kids.component';
import { NbThemeModule } from '@nebular/theme';
import { NbSidebarModule, NbLayoutModule, NbSidebarService } from '@nebular/theme';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import {MatTableModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {KidsService} from './kids.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    NbLayoutModule,
    NbSidebarModule,
    HttpClientModule
  ],
  providers: [NbSidebarService, KidsService],
  declarations: [KidsComponent, DataLoadedComponent],
})
export class KidsModule {

 }
