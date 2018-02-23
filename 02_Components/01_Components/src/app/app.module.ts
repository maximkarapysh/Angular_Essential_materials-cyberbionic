import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';  // модуль для маршрутизации

import { AppComponent } from './app.component';
import { List1Component } from './list1/list1.component';
import { List2Component } from './list2/list2.component';

// localhost:4200/list1

@NgModule({
  declarations: [
    AppComponent,
    List1Component,
    List2Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([    // настройка маршрутов
      { path: 'list1', component: List1Component },
      { path: 'list2', component: List2Component },
      { path: '', redirectTo: 'list1', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
