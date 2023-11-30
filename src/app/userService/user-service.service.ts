import { Injectable } from '@angular/core';
import { User } from '../usersModels/users';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  users: User[] = [
    {
     
      name: 'Carlo',
      email: 'c@fff.com',
      role: 'user'
    },
    {
     
      name: 'Lucia',
      email: 'f@fff.com',
      role: 'user'
    }
  ]

  constructor() { }

  getUsers(): User[] {
    return this.users
  }
  
}
