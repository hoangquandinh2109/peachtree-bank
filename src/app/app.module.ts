import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AssignmentLayoutModule } from '@webapp-layout/assignment-layout/assignment-layout.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AssignmentLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
