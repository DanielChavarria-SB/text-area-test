import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiaSelectionComponent } from './mia-selection.component';
import { MiaPathOptionModule } from '../mia-path-option/mia-path-option.module';



@NgModule({
  declarations: [
    MiaSelectionComponent
  ],
  imports: [
    CommonModule,
    MiaPathOptionModule
  ],
  exports: [
    MiaSelectionComponent
  ]
})
export class MiaSelectionModule { }
