import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnChanges {
  @Input()
  public transactions: any[];
  public data: any[];
  constructor(
  ) { }

  public ngOnChanges(): void {
    this.data = this.sortByDate(this.transactions);
  }

  public stringDate(valueDate: any): string {
    valueDate = new Date(valueDate);
    const shortMonth = valueDate.toLocaleString('en-us', { month: 'short' });
    return `${shortMonth}. ${valueDate.getDate()}`;
  }

  private sortByDate(transactions: any[]): any[] {
    return transactions.sort((a, b) => {
      return new Date(b.dates.valueDate).getTime() - new Date(a.dates.valueDate).getTime();
    });
  }

}
