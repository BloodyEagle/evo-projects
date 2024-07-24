import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TodoService} from "./services/todo.service";
import {HttpUserInterceptor} from "./interceptors/http-user.interceptor";
import {CounterComponent} from './counter/counter.component';
import {AccordionModule} from 'ngx-bootstrap/accordion';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AccordionModule.forRoot(),
    HttpClientModule
  ],
  providers: [TodoService, {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpUserInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
