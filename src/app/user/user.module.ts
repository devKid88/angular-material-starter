import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './core/user.service';
import { MatFormFieldModule, MatTableModule, MatInputModule, MatPaginatorModule } from '@angular/material';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule
  ],
  declarations: [UserListComponent],
  providers: [
    UserService
  ]
})
export class UserModule { }
