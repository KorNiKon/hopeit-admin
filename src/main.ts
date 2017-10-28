import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { KidsModule } from './app/kids/kids.module';
import { UsersModule } from './app/users/users.module';
import { MessagesModule } from './app/messages/messages.module';
import { PaymentsModule } from './app/payments/payments.module';
import { NotificationsModule } from './app/notifications/notifications.module';
import { environment } from './environments/environment';
import { NbEmailPassAuthProvider, NbAuthModule } from '@nebular/auth';



if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
