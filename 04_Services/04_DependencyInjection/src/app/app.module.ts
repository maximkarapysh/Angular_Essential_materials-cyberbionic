import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SimpleServiceModule } from './sample02-simpleService/simple-service.module';
import { ServiceHierarchyModule } from './sample03-serviceHierarchy/service-hierarchy.module';
import { ProvidersSamplesModule } from './sample04-providers/providers-samples.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SimpleServiceModule,
    ServiceHierarchyModule,
    ProvidersSamplesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
