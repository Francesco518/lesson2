import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../userService/user-service.service';
import { User } from '../usersModels/users'; 

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[] = []
  selectUserId: number | undefined;
  selectedUser: User | undefined

  constructor(private route: ActivatedRoute, private userService: UserServiceService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const userId = params.get('id');
      if (userId) {
        const id = +userId
        this.selectUserId= id
       
      } else {
        this.selectUserId = undefined;
        this.selectedUser = undefined
      }
      this.users = this.userService.getUsers()
    })
  }

}
