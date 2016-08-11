import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { appRouterProviders } from './app.routes';
import { PinService} from './manual-operation/pin.service';

import { XHRBackend, HTTP_PROVIDERS } from '@angular/http';

import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService }               from './mocks/in-memory-data.service';

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
    PinService,
    { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
    { provide: SEED_DATA, useClass: InMemoryDataService }      // in-mem server 
  ] ,
  bootstrap: [ AppComponent ]
})
export class AppModule { }
