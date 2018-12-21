import { Component, OnInit } from '@angular/core';
import { UsersService } from './../../services/users.service';
import { User } from './../../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private usersServis: UsersService) { }
  users: User[];
  ngOnInit() {
    this.usersServis.Get().subscribe(( resp: User[]) => {
        this.users=resp;
    })
  }
  Create(name: HTMLInputElement,email: HTMLInputElement,github: HTMLInputElement,twitter: HTMLInputElement,location: HTMLInputElement,lates: HTMLInputElement){

    const obj: User = {
        name: name.value,
        email: email.value,
        github: github.value,
        twitter: twitter.value,
        location: location.value,
        latest_article_published: lates.value,
      
    }
    this.usersServis.Create(obj) 
    .subscribe((resp: User)=>{
        this.users.unshift(resp);
    });

  }
  Remove(obj: User){
    this.usersServis.Remove(obj.id)
    .subscribe((resp: User) => {
        var index = this.users.indexOf(obj);
        this.users.splice(index,1);
    })
  }
}
