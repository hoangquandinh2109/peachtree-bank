import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// ? Components
import { AppComponent } from './app.component';
import { MoneyTransferComponent } from '@webapp-section/money-transfer/money-transfer.component';

// ? Modules
import { AssignmentLayoutModule } from '@webapp-layout/assignment-layout/assignment-layout.module';

const COMPONENTS =  [
  AppComponent,
  MoneyTransferComponent
];
@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AssignmentLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
