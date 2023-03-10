import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  arrUsers: User[] = [];
  constructor(private usersService: UsersService) { }

  async ngOnInit(): Promise<void> {

    try {
      let response = await this.usersService.getAll(1);
      this.arrUsers = response.data;
      console.log(this.arrUsers)
    }
    catch (err: any) {
      console.log(err.error)
    }
  }

}
