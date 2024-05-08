import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatInputComponent } from './chat-input.component';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ChatInputComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    ReactiveFormsModule
  ],
  exports: [
    ChatInputComponent
  ]
})
export class ChatInputModule { }
