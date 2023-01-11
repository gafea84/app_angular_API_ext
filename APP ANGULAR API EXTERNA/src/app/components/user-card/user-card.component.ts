import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() isCard: boolean = true;
  @Input() myUser!: User;
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
  }

  async deleteUser(pId: number | undefined) {
    if (pId !== undefined) {
      try {
        let response = await this.usersService.delete(pId);
        if (response.error) {
          alert(response.error)
        } else {
          alert('Has borrado el usuario ' + response.first_name + ' con exito');
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      alert('usuario no disponible')
    }


  }

}
