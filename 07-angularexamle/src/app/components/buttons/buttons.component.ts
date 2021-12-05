import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  @Output() randomNameHandler = new EventEmitter<boolean>();
  @Output() resetHandler = new EventEmitter<boolean>();
  @Output() updateListHandler = new EventEmitter<boolean>();

  @Input() randomText = 'Generate random';
  @Input() addText = 'Add from Input';
  @Input() resetText = 'Reset';

  constructor() { }

  ngOnInit(): void {
  }

  randomNameClick() {
    this.randomNameHandler.emit(true);
    console.log('random button clicked!');
  }

  resetClick() {
    this.resetHandler.emit(true);
    console.log('reset button clicked!');
  }

  updateList() {
    this.updateListHandler.emit(true);
    console.log('update button clicked!');
  }

}
