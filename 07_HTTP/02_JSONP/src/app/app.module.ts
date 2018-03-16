import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { WikiComponent } from './wiki/wiki.component';
import { WikiService } from './wiki.service';

import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

@NgModule({
	declarations: [
		AppComponent,
		WikiComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		HttpClientJsonpModule

	],
	providers: [WikiService],
	bootstrap: [AppComponent]
})
export class AppModule { }
