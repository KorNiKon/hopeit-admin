import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { NbThemeModule } from '@nebular/theme';
import { NbSidebarModule, NbLayoutModule, NbSidebarService } from '@nebular/theme';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import {MatTableModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './users.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    NbLayoutModule,
    NbSidebarModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule

  ],
  providers: [NbSidebarService, UserService],
  declarations: [UsersComponent]

})
export class UsersModule { }
