import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { ModifyUserComponent } from './modify-user/modify-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { ListUsersComponent } from './list-users/list-users.component';

const routes: Routes = [
  {path: 'add-user', component: AddUserComponent},
  {path: 'modify-user', component: ModifyUserComponent}, 
  {path: 'delete-user', component: DeleteUserComponent}, 
  {path: 'list-users', component: ListUsersComponent}
]

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
