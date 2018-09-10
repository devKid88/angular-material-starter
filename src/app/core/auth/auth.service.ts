import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthModel } from './auth.model';
import { BaseApiService } from '../base-api.service';
import { TransportService } from '../transport.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseApiService<AuthModel> {

  constructor(
    public transport: TransportService
  ) {
    super(transport);
    this.name = 'auth';
  }

  login(username: string, password: string): Observable<boolean> {
    return this.transport.post(this.name, JSON.stringify({ username, password }))
      .pipe(
        map(response => {
          const token = response['token'];
          if (token) {
            localStorage.setItem('loggedUser', JSON.stringify({ username, token }));
            return true;
          }
          return false;
        })
      );
  }

  logout(): void {
    localStorage.clear();
  }

  get isLoggedIn(): boolean {
    return !!localStorage.getItem('loggedUser');
  }
}
