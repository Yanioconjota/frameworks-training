import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  @Output() randomNameHandler = new EventEmitter<boolean>();
  @Output() resetHandler = new EventEmitter<boolean>();

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

}
