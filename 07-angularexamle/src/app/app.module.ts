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
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './components/intro/intro.component';
import { AccountComponent } from './components/account/account.component';
import { BlogComponent } from './components/blog/blog.component';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [
  { path: 'intro', component: IntroComponent },
  { path: 'account', component: AccountComponent },
  { path: 'blog', component: BlogComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NamesListComponent,
    ButtonsComponent,
    InputComponent,
    HobbiesComponent,
    MessageComponent,
    IntroComponent,
    AccountComponent,
    BlogComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
