import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-submit-button',
  templateUrl: './submit-button.component.html',
  styleUrls: ['./submit-button.component.scss']
})
export class SubmitButtonComponent {
  @Input() disabled: boolean;
  @Output() submitForm: EventEmitter<any> = new EventEmitter();

  triggerSubmit(event: Event): void {
    event.preventDefault();
    this.submitForm.emit(event);
  }

}
