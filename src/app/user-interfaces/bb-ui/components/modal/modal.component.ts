import { Component, OnInit, ViewChild, Type, ComponentFactoryResolver, ElementRef } from '@angular/core';

// ? Directives
import { ModalDirective } from '@webapp-ui/bb-ui/directives/modal.directive';
import { ModalService } from '@webapp-ui/bb-ui/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @ViewChild(ModalDirective, { static: true })
  public modalHost: ModalDirective;
  public contentComponent: Type<any>;
  public data: any;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private el: ElementRef,
    private modalSvc: ModalService
  ) { }

  public ngOnInit(): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.contentComponent);
    const viewContainerRef = this.modalHost.viewContainerRef;
    const componentRef = viewContainerRef.createComponent(componentFactory);
    componentRef.instance.data = this.data;

    this.el.nativeElement.addEventListener('click', (el: any) => {
      if (el.target.className === 'modal') {
        this.close();
      }
    });
  }

  public close(): void {
    this.modalSvc.close();
  }

}
