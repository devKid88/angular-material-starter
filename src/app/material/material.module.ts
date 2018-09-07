import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatButtonModule, MatCardModule } from '@angular/material';

const materialModules = [
  MatCardModule,
  MatButtonModule,
  MatIconModule
];

@NgModule({
  imports: [
    CommonModule,
    ...materialModules
  ],
  exports: [
    ...materialModules
  ],
  declarations: []
})
export class MaterialModule { }
