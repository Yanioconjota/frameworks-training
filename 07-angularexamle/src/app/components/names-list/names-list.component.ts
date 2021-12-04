import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-names-list',
  templateUrl: './names-list.component.html',
  styleUrls: ['./names-list.component.scss']
})
export class NamesListComponent implements OnInit {

  @Input() usedNames:string[] = [];
  @Output() removeNameHandler = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  removeName(name: string, i: number) {
    this.removeNameHandler.emit(name);
    this.usedNames.splice(i, 1);
  }

}
