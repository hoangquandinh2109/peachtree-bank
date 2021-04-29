import { Component, OnInit } from '@angular/core';

// ? Services
import { ModalService } from '@webapp-ui/bb-ui/services/modal.service';

@Component({
  selector: 'app-review-transfer',
  templateUrl: './review-transfer.component.html',
  styleUrls: ['./review-transfer.component.scss']
})
export class ReviewTransferComponent implements OnInit {
  public data: any;
  constructor(
    private modalSvc: ModalService
  ) { }

  public ngOnInit(): void {
  }

  public sendTransfer(): void {
    this.modalSvc.close(true);
  }

  public close(): void {
    this.modalSvc.close();
  }

}
