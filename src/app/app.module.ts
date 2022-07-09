import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterStateSnapshot, ActivatedRouteSnapshot, Router, RouteReuseStrategy } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from "./hello/hello.component"
import { SizeDetectorComponent } from './size-detector/size-detector.component';
import { ResizeService } from './resize.service';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		RouterModule,
	],
	declarations: [
		AppComponent,
		HelloComponent,
		SizeDetectorComponent
	],
	bootstrap: [AppComponent],
	providers: [ResizeService]
})
export class AppModule { }
