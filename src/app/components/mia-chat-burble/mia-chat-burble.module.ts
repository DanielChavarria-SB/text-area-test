import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiaChatBurbleComponent } from './mia-chat-burble.component';



@NgModule({
  declarations: [
    MiaChatBurbleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MiaChatBurbleComponent
  ]
})
export class MiaChatBurbleModule { }
