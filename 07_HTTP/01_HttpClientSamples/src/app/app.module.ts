import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { InMemoryServerModule } from './sample01_inMemServer/sample.module';
import { HttpClientModule } from '@angular/common/http';


// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ItemData } from './sample01_inMemServer/inMemoryServer';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InMemoryServerModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(ItemData)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
