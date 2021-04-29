import { Injectable, ComponentFactoryResolver, Type } from '@angular/core';

// ? Components
import { ModalComponent } from '@webapp-ui/bb-ui/components/modal/modal.component';

// ? Directives
import { ModalDirective } from '@webapp-ui/bb-ui/directives/modal.directive';

// ? RXJS
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private modalActivated: Subject<unknown>;
  private modalHost: ModalDirective;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  public setModalHost(modalHost: ModalDirective): void {
    this.modalHost = modalHost;
  }

  public openModal(contentComponent: Type<any>, data: any): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ModalComponent);
    const viewContainerRef = this.modalHost.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    componentRef.instance.contentComponent = contentComponent;
    componentRef.instance.data = data;
    this.modalActivated = new Subject();
  }

  public close(newActiveValue?: any): void {
    this.modalHost.viewContainerRef.clear();
    this.modalActivated.next(newActiveValue);
    this.modalActivated.complete();
  }

  public afterClosed(): Observable<any> {
    return this.modalActivated.asObservable();
  }
}
