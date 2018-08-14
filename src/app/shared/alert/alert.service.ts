import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class AlertService {

  constructor(
    public toastrService: ToastrService
  ) { }

  success(message: string, title?: string) {
    return this.toastrService.success(message, title);
  }

  error(message: string, title?: string) {
    return this.toastrService.error(message, title);
  }

  info(message: string, title?: string) {
    return this.toastrService.info(message, title);
  }

  warning(message: string, title?: string) {
    return this.toastrService.warning(message, title);
  }
}
