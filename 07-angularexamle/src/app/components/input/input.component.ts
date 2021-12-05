import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() inputVal: string = '';

  @Output() inputValueHandler = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  getInputValue(event: any) {
    this.inputValueHandler.emit(event);
  }

}
