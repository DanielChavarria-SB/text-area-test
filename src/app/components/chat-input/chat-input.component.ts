import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.scss']
})
export class ChatInputComponent {

  @Output() userMessageSent = new EventEmitter<string | null>();

  userMessage = new FormControl('');

  currentUserMessage: string | null = '';
  
  sendMessage(){
    this.currentUserMessage = this.userMessage.value;
    if(this.currentUserMessage !== ''){
      console.log('null');
    }
    this.userMessageSent.emit(this.userMessage.value);
  }
}
