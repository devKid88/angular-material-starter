import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

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

  // DATA TABLE CONFIG
  displayedColumns: string[] = ['id', 'name'];
  dataSource: MatTableDataSource<UserModel>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  // END DATA TABLE CONFIG

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.loadUsers();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  private loadUsers() {
    this.userService.getAll().subscribe(response => {
      this.users = response.items;
      this.totalUsers = response.total_count;
      this.setDataSource(this.users);
    });
  }

  private setDataSource(users: UserModel[]) {
    this.dataSource = new MatTableDataSource(users);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
