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
  showSpinner: boolean;

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
    this.showSpinner = true;
    setTimeout(() => { // Waiting for api response test
      if (this.username == 'admin' && this.password == 'admin') {
        this.router.navigate(['dashboard']);
      } else {
        this.alert.error('Bad Credentials');
        this.showSpinner = false;
      }
    }, 2000);
  }

  private randomPosition() {
    return this.positions[Math.floor(Math.random() * this.positions.length)];
  }
}
