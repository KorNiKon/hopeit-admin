import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KidsComponent } from './kids.component';
import { NbSidebarModule, NbLayoutModule, NbSidebarService } from '@nebular/theme';

@NgModule({
  imports: [
    CommonModule,
    NbLayoutModule,
    NbSidebarModule
  ],
  providers: [NbSidebarService],
  declarations: [KidsComponent],
})
export class KidsModule { }
