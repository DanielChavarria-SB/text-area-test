import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-mia-path-option',
  templateUrl: './mia-path-option.component.html',
  styleUrls: ['./mia-path-option.component.scss']
})
export class MiaPathOptionComponent {
  @Input() optionText: string = '';
  @Output() clickEvent = new EventEmitter<string>();

  handleClick(selectedoption: string){
    this.clickEvent.emit(selectedoption);
  }
}
