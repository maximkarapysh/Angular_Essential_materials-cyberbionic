import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { BindingSamplesModule } from "./sample01-binding/binding-sample.module";
import { TwoWayBindingSamplesModule } from './sample02-two-way-databinding/two-way-binding-sample.module';
import { BuiltInDirectivesSamplesModule } from './sample03-built-in-directives/built-in-directives-sample.module';
import { DirectiveTemplatesSamplesModule } from './sample04-templates/directive-templates-sample.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BindingSamplesModule,
    TwoWayBindingSamplesModule,
    BuiltInDirectivesSamplesModule,
    DirectiveTemplatesSamplesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
