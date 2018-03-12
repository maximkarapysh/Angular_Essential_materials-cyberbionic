import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { InputSampleModule } from './sample01-input/input-sample.module';
import { FormsSampleModule } from './sample02-forms/forms-sample.module';
import { ReactiveFormsSamplesModule } from './sample03-reactiveForms/reactive-forms-samples.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputSampleModule,
    FormsSampleModule,
    ReactiveFormsSamplesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
