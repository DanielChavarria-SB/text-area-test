import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-mia-selection',
  templateUrl: './mia-selection.component.html',
  styleUrls: ['./mia-selection.component.scss']
})
export class MiaSelectionComponent {

  @Input() inputOptions: string[] = [];
  @Output() optionSelectedEmitter = new EventEmitter<string>();


  optionSelectedEvent(selectedOption: string){
    this.optionSelectedEmitter.emit(selectedOption);
  }
}
