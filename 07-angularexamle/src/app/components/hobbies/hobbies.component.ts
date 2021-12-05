import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss']
})
export class HobbiesComponent implements OnInit {

  @Input() inputHobbyVal = '';
  @Input() hobbiesList:string[] = [];

  @Output() removeHobbyHandler = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  removeHobby(name: string, i: number) {
    this.removeHobbyHandler.emit(name);
    this.hobbiesList.splice(i, 1);
  }

}
