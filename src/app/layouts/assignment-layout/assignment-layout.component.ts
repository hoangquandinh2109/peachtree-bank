import { Component, OnInit, ViewChild } from '@angular/core';

// ? Directives
import { ModalDirective } from '@webapp-ui/bb-ui/directives/modal.directive';

// ? Services
import { ModalService } from '@webapp-ui/bb-ui/services/modal.service';
@Component({
  selector: 'app-assignment-layout',
  templateUrl: './assignment-layout.component.html',
  styleUrls: ['./assignment-layout.component.scss']
})
export class AssignmentLayoutComponent implements OnInit {
  @ViewChild(ModalDirective, { static: true })
  public modalHost: ModalDirective;
  constructor(private modalSvc: ModalService) { }

  public ngOnInit(): void {
    this.modalSvc.setModalHost(this.modalHost);
  }

}
