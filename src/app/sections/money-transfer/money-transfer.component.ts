import { Component, OnChanges, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

// ? Services
import { ModalService } from '@webapp-ui/bb-ui/services/modal.service';

// ? External Components
import { ReviewTransferComponent } from './review-transfer/review-transfer.component';

@Component({
  selector: 'app-money-transfer',
  templateUrl: './money-transfer.component.html',
  styleUrls: ['./money-transfer.component.scss']
})
export class MoneyTransferComponent implements OnChanges {
  @Input()
  public myAccount: any;
  public transferForm: FormGroup;

  constructor(private modalSvc: ModalService) {
    this.initNewForm();
  }

  public ngOnChanges(): void {
    if (this.myAccount.balance <= -500) {
      this.transferForm?.controls.amount.disable();
    }
  }

  public digitOnly(event: KeyboardEvent): boolean {
    // allow 'Enter' key
    if (event.key === 'Enter') {
      return true;
    }
    return !/([^\d\.])/.test(event.key);
  }

  public formIsError(formControlName: string): boolean {
    const { invalid, dirty, touched, value } = this.transferForm.controls[formControlName];
    if (formControlName === 'amount') {
      return (invalid || value > this.myAccount.balance) && (dirty || touched);
    }
    return invalid && (dirty || touched);
  }

  public submit(): void {
    if (this.transferForm.valid && this.transferForm.controls.amount.value <= this.myAccount.balance) {
      this.modalSvc.openModal(ReviewTransferComponent, this.transferForm.value);
      this.modalSvc.afterClosed().subscribe(result => {
        if (result) {
          this.myAccount.balance -= +this.transferForm.controls.amount.value;
          const { amount, toAccount: name } = this.transferForm.value;
          const categoryCode = ['#c12020', '#e25a2c', '#fbbb1b'][Math.floor(Math.random() * 3)];
          this.myAccount.transactions = [...this.myAccount.transactions, {
            categoryCode,
            dates: { valueDate: new Date().getTime() },
            merchant: { name },
            transaction: {
              type: 'Online Transfer',
              creditDebitIndicator: 'DBIT',
              amountCurrency: { amount }
            }
          }];
          this.initNewForm();
        }
      });
    }
  }

  private initNewForm(): void {
    this.transferForm = new FormGroup({
      toAccount: new FormControl('', Validators.required),
      amount: new FormControl('', Validators.pattern('[0-9.]*')),
    });
  }
}
