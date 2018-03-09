import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

// services
import { PhraseService } from './shared/phrase.service';

// module 
import { PhrasesModule } from './phrases/phrases.module';
import { AdminModule } from './admin/admin.module';
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { AuthGuard } from './shared/auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    PhrasesModule,
    AdminModule,
    LoginRoutingModule
  ],
  providers: [
    PhraseService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
