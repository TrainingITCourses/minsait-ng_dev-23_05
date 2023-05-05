import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityItemComponent } from './activity-item/activity-item.component';



@NgModule({
  declarations: [
    ActivityItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ActivityItemComponent
  ]
})
export class SharedModule { }
