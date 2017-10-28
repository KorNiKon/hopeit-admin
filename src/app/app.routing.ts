 import { NgModule } from '@angular/core';
 import { Routes, RouterModule } from '@angular/router';
 import { AppComponent } from './app.component';
 import { KidsComponent } from './kids/kids.component';
 import { UsersComponent } from './users/users.component';
 import { MessagesComponent } from './messages/messages.component';
 import { NotificationsComponent } from './notifications/notifications.component';
 import { PaymentsComponent } from './payments/payments.component';
 import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

 const routes: Routes = [
   { path: '', pathMatch: 'full', redirectTo: 'kids' },
   { path: 'app', component: AppComponent },
   { path: 'kids', component: KidsComponent },
   { path: 'users', component: UsersComponent },
   { path: 'messages', component: MessagesComponent },
   { path: 'notifications', component: NotificationsComponent },
   { path: 'payments', component: PaymentsComponent },
   { path: '**', component: PageNotFoundComponent }
 ];

 @NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
 })
 export class AppRoutingModule { }

 export const routingComponents = [AppComponent, KidsComponent];
