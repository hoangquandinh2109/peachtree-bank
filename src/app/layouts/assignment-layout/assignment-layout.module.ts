import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ? Components
import { AssignmentLayoutComponent } from './assignment-layout.component';

// ? Modules
import { BbUIModule } from '@webapp-ui/bb-ui/bb-ui.module';

const COMPONENTS = [AssignmentLayoutComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    BbUIModule
  ], exports: [
    ...COMPONENTS,
    BbUIModule
  ]
})
export class AssignmentLayoutModule { }
