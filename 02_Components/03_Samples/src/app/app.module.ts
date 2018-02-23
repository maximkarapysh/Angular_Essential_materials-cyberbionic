import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ComponentsSamplesModule } from './01_components/components-samples.module';
import { LifecycleSampleModule } from './02_lifecycle/lifecycle-samples.module';
import { ChildAndContentSampleModule } from './03_child_and_content/child-and-content-samples.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsSamplesModule,
    LifecycleSampleModule,
    ChildAndContentSampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
