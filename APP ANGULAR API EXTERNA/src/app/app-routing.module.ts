import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { C404Component } from './components/c404/c404.component';
import { FormComponent } from './components/form/form.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserViewComponent } from './components/user-view/user-view.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "home", component: UserListComponent },
  { path: "user/:iduser", component: UserViewComponent },
  { path: "newuser", component: FormComponent },
  { path: "updateuser/:iduser", component: FormComponent },
  { path: "**", component: C404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
