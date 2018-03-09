import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PhraseDetailsComponent } from './phrase-details/phrase-details.component';
import { PhraseListComponent } from './phrase-list/phrase-list.component';

// services
import { PhraseService } from './shared/phrase.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PhraseDetailsComponent,
    PhraseListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PhraseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
