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

  private merchantName: string;
  constructor(
  ) { }

  public ngOnChanges(): void {
    if (this.merchantName && this.merchantName !== '') {
      this.filterTransactionsByMerchant(this.merchantName);
    } else {
      this.data = this.sortByDate(this.transactions);
    }
  }

  public stringDate(valueDate: any): string {
    valueDate = new Date(valueDate);
    const shortMonth = valueDate.toLocaleString('en-us', { month: 'short' });
    return `${shortMonth}. ${valueDate.getDate()}`;
  }

  public filterTransactionsByMerchant(merchantName: string): void {
    this.merchantName = merchantName;
    this.data = this.sortByDate(this.transactions.filter(
      item => item.merchant.name.toLowerCase().includes(merchantName.toLowerCase()))
    );
  }

  private sortByDate(transactions: any[]): any[] {
    return transactions.sort((a, b) => {
      return new Date(b.dates.valueDate).getTime() - new Date(a.dates.valueDate).getTime();
    });
  }

}
