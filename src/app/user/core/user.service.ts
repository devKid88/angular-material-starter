import { Injectable } from '@angular/core';

import { BaseApiService } from '../../core/base-api.service';
import { UserModel } from './user.model';
import { TransportService } from '../../core/transport.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseApiService<UserModel> {

  constructor(
    public transport: TransportService
  ) {
    super(transport);
    this.name = 'users';
  }
}
