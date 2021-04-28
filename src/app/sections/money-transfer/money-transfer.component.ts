import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-money-transfer',
  templateUrl: './money-transfer.component.html',
  styleUrls: ['./money-transfer.component.scss']
})
export class MoneyTransferComponent implements OnInit {
  @Input()
  public myAccountBalance: number;
  
  constructor() { }

  public ngOnInit(): void {
  }

  public digitOnly(event: KeyboardEvent): boolean {
    if (event.key === "Enter") {
      return true;
    }
    return !/([^\d\.])/.test(event.key);
  }

  public submit(event: Event): void {
    alert('hi')
  }

}
