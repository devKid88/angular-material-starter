import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService } from '../../shared/alert/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  positions = [
    'start', 'center', 'end'
  ];

  xPosition: string;
  yPosition: string;

  constructor(
    private router: Router,
    private alert: AlertService
  ) { }

  ngOnInit() {
    this.xPosition = this.randomPosition();
    this.yPosition = this.randomPosition();
  }

  login(): void {
    if (this.username == 'admin' && this.password == 'admin') {
      this.router.navigate(['user']);
    } else {
      this.alert.error('Bad Credentials');
    }
  }

  private randomPosition() {
    return this.positions[Math.floor(Math.random() * this.positions.length)];
  }
}
