import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { NamesListComponent } from './components/names-list/names-list.component';
import { ButtonsComponent } from './components/buttons/buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NamesListComponent,
    ButtonsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
