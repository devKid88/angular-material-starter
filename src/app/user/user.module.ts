import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatTableModule, MatInputModule, MatPaginatorModule } from '@angular/material';

import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './core/user.service';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
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
