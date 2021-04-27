import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignmentLayoutComponent } from './assignment-layout.component';

import { BbUIModule } from '@webapp-ui/bb-ui/bb-ui.module';

const COMPONENTS = [AssignmentLayoutComponent]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    BbUIModule
  ], exports: [...COMPONENTS]
})
export class AssignmentLayoutModule { }
