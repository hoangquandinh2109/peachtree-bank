import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

// ? Components
import { FilterComponent } from './components/filter/filter.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { SubmitButtonComponent } from './components/submit-button/submit-button.component';
import { TransactionItemComponent } from './components/transaction-item/transaction-item.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModalDirective } from './directives/modal.directive';

const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  LogoComponent,
  SubmitButtonComponent,
  FilterComponent,
  TransactionItemComponent,
  ModalComponent,
  ModalDirective
];
@NgModule({
  declarations: [...COMPONENTS],
  imports: [],
  exports: COMPONENTS,
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BbUIModule { }
