import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {UserComponent} from './components/user/user.component';
import {HomeComponent} from './components/home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms";
import {CompaniesComponent} from './components/companies/companies.component';
import {MessagesComponent} from './components/messages/messages.component';
import {AppRoutingModule} from './app-routing.module';
import {NavComponent} from './components/nav/nav.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthGuard} from "./auth/auth.guard";
import {TokenInterceptorService} from "./service/token-interceptor.service";
import { PartnersComponent } from './components/partners/partners.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    CompaniesComponent,
    MessagesComponent,
    NavComponent,
    PartnersComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClientModule, AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
