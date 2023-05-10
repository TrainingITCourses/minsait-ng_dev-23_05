import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityNewRoutingModule } from './activity-new-routing.module';
import { ActivityNewComponent } from './activity-new.component';


@NgModule({
  declarations: [
    ActivityNewComponent
  ],
  imports: [
    CommonModule,
    ActivityNewRoutingModule
  ]
})
export class ActivityNewModule { }
