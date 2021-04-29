import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


// ? Components
import { AppComponent } from './app.component';
import { MoneyTransferComponent } from '@webapp-section/money-transfer/money-transfer.component';

// ? Modules
import { AssignmentLayoutModule } from '@webapp-layout/assignment-layout/assignment-layout.module';
import { TransactionListComponent } from './sections/transaction-list/transaction-list.component';

const COMPONENTS = [
  AppComponent,
  MoneyTransferComponent,
  TransactionListComponent
];
@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AssignmentLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
