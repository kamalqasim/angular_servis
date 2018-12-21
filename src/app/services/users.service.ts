import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from './../models/user';
import { GeniricHttpServiceService } from './geniric-http-service.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends GeniricHttpServiceService {
  constructor( http: HttpClient) {
    super('http://localhost:8000/api/authors',http);
   }
  

}
