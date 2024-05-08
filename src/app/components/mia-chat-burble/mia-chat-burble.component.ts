import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mia-chat-burble',
  templateUrl: './mia-chat-burble.component.html',
  styleUrls: ['./mia-chat-burble.component.scss']
})
export class MiaChatBurbleComponent {
  @Input() messageTime:string = '00:00';
  @Input() messagecontent: string | null = '';
  @Input() isUserMessage:boolean = false;



}
