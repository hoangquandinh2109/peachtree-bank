import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-money-transfer',
  templateUrl: './money-transfer.component.html',
  styleUrls: ['./money-transfer.component.scss']
})
export class MoneyTransferComponent implements OnInit {
  @Input()
  public myAccountBalance: number;
  public transferForm: FormGroup;
  constructor() {
    this.transferForm = new FormGroup({
      toAccount: new FormControl('', Validators.required),
      amount: new FormControl('', Validators.pattern('[0-9.]*')),
    });
  }

  public ngOnInit(): void {
  }

  public digitOnly(event: KeyboardEvent): boolean {
    if (event.key === 'Enter') {
      return true;
    }
    return !/([^\d\.])/.test(event.key);
  }

  public formIsError(formControlName: string): boolean {
    const {invalid, dirty, touched, errors} = this.transferForm.controls[formControlName];
    console.log({invalid, dirty, touched, errors, formControlName});
    return invalid && (dirty || touched);
  }

  public submit(event: Event): void {
    alert('hi')
  }

}
