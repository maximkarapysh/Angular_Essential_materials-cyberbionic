import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; // модуль для маршрутизации

import { AppComponent } from './app.component';
import { ListsModule, routs } from './lists/index'; // использование barrel file


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routs),
    ListsModule  // испортируем модуль с List компонентами
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
