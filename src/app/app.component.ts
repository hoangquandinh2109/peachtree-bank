import { Component, OnInit, OnDestroy } from '@angular/core';

// ? Services
import { TransactionService } from '@webapp-svc/transaction.service';

// ? RXJ
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public myAccount: any = {
    balance: 5824.76
  };

  private destroy$: Subject<any> = new Subject();
  constructor(
    private transactionSvc: TransactionService
  ) { }

  public ngOnInit(): void {
    this.transactionSvc.getTransactions()
      .pipe(takeUntil(this.destroy$))
      .subscribe(({ data }) => {
        this.myAccount.transactions = data;
      });
  }
  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
