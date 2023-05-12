import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { ActivityNewRoutingModule } from './activity-new-routing.module';
import { ActivityNewComponent } from './activity-new.component';

@NgModule({
  declarations: [ActivityNewComponent],
  imports: [CommonModule, ActivityNewRoutingModule, ReactiveFormsModule],
})
export class ActivityNewModule {}
