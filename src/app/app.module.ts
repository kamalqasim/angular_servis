import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';
import { UsersComponent } from './components/users/users.component';
import { HeaderComponent } from './components/header/header.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ReqresComponent } from './components/reqres/reqres.component';
import { TypicodeComponent } from './components/typicode/typicode.component';
import { UsersService } from './services/users.service';
import { from } from 'rxjs';

const routeConfig: Route [] = [
    {
      path: '',
      component: PostsComponent
    },
    {
        path: 'posts',
        component: PostsComponent
    },
    {
      path: 'users',
      component: UsersComponent
    },
    {
      path: '**',
      component: NotfoundComponent
    }
]


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    UsersComponent,
    HeaderComponent,
    NotfoundComponent,
    ReqresComponent,
    TypicodeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig),
    HttpClientModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
