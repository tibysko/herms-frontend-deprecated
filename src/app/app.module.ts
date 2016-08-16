import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { appRouterProviders } from './app.routes';
import { PinService} from './manual-operation/pin.service';

import { HTTP_PROVIDERS } from '@angular/http';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    appRouterProviders,
    HTTP_PROVIDERS,
    PinService
  ] ,
  bootstrap: [ AppComponent ]
})
export class AppModule { }
