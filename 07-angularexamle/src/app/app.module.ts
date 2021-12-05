import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { NamesListComponent } from './components/names-list/names-list.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { InputComponent } from './components/input/input.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { MessageComponent } from './components/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NamesListComponent,
    ButtonsComponent,
    InputComponent,
    HobbiesComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
