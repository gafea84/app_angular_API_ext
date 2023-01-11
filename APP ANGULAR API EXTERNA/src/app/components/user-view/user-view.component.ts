import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  myUser!: User;
  constructor(
    private usersService: UsersService,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(async (params: any) => {
      let id: number = parseInt(params.iduser);
      let response = await this.usersService.getById(id);
      if (response.error) {
        alert(response.error)
      }
      else {
        this.myUser = response;
      }
    })
  }

  deleteUser(pId: number | undefined) {

  }

}
