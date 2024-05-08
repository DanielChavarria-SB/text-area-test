import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactCardComponent } from './contact-card.component';



@NgModule({
  declarations: [
    ContactCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContactCardComponent
  ]
})
export class ContactCardModule { }
