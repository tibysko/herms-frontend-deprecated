import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { appRouterProviders } from './app.routes';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    appRouterProviders
  ] ,
  bootstrap: [ AppComponent ]
})
export class AppModule { }
