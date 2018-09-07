import { Component, OnInit } from '@angular/core';

import { UserService } from '../core/user.service';
import { UserModel } from '../core/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: UserModel[];
  totalUsers: number;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.loadUsers();
  }

  private loadUsers() {
    this.userService.getAll().subscribe(response => {
        this.users = response.items;
        this.totalUsers = response.total_count;
      });
  }
}
