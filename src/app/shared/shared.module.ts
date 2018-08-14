import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AlertService } from './alert/alert.service';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [
    FlexLayoutModule
  ],
  declarations: [
  ],
  providers: [
    AlertService
  ]
})
export class SharedModule { }
