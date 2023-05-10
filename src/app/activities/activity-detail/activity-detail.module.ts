import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityDetailRoutingModule } from './activity-detail-routing.module';
import { ActivityDetailComponent } from './activity-detail.component';


@NgModule({
  declarations: [
    ActivityDetailComponent
  ],
  imports: [
    CommonModule,
    ActivityDetailRoutingModule
  ]
})
export class ActivityDetailModule { }
