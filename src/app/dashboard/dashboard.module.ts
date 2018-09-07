import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {
  MatGridListModule,
  MatMenuModule,
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';

import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    MatGridListModule,
    MatMenuModule,
    LayoutModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
