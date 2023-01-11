import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup;
  tipo: string = 'Nuevo';
  constructor(
    private userServices: UsersService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {

    this.form = new FormGroup({
      first_name: new FormControl("", []),
      last_name: new FormControl("", []),
      email: new FormControl("", []),
      image: new FormControl("", []),
    }, [])
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async (params: any) => {

      if (params.iduser !== undefined && params.iduser !== null) {
        let id = parseInt(params.iduser);
        this.tipo = 'Actualizar';
        //hay que pedir los datos al servidor
        let response = await this.userServices.getById(id);


        this.form = new FormGroup({
          id: new FormControl(response.id, []),
          first_name: new FormControl(response?.first_name, []),
          last_name: new FormControl(response?.last_name, []),
          email: new FormControl(response?.email, []),
          image: new FormControl(response?.image, []),
        }, [])
      }
    })
  }

  async getDataForm() {
    console.log(this.form.value)
    if (this.form.value.id) {
      //ACTUALIZANDO
      try {
        let response = await this.userServices.update(this.form.value);
        console.log(response)
        if (response.id) {
          this.router.navigate(['/home'])
        } else {
          alert('error al actualizar el usuario, intentelo de nuevo.')
        }
      } catch (err) {
        alert(err);
      }


    } else {
      //CREANDO
      try {
        let response = await this.userServices.create(this.form.value);
        console.log(response)
        if (response.id) {
          this.router.navigate(['/home'])
        } else {
          alert('error al crear el usuario, intentelo de nuevo.')
        }
      } catch (err) {
        alert(err);
      }
    }





  }

}
