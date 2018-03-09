import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

// services
import { PhraseService } from './shared/phrase.service';

// module 
import { PhrasesModule } from './phrases/phrases.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PhrasesModule
  ],
  providers: [PhraseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
