import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {
  @Input()
  public transactions: any[];
  constructor(
  ) { }

  public ngOnInit(): void {
  }

  public stringDate(valueDate: any): string {
    valueDate = new Date(valueDate);
    const shortMonth = valueDate.toLocaleString('en-us', { month: 'short' });
    return `${shortMonth}. ${valueDate.getDate()}`;
  }

}
