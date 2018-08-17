import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LayoutModule } from '@angular/cdk/layout';
import { ToastrModule } from 'ngx-toastr';
import {
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Router } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppHttpInterceptor } from './core/auth-interceptor';
import { CoreModule } from './core/core.module';
import { Page404Component } from './page404/page404.component';

const toastrConfig = {
  timeOut: 2000
};

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    Page404Component,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(toastrConfig),
    // TODO: Check Flex layout for root option
    FlexLayoutModule,
    AppRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    CoreModule,
    LayoutModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptor,
      useFactory: function (router: Router) {
        return new AppHttpInterceptor(router);
      },
      deps: [Router],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
