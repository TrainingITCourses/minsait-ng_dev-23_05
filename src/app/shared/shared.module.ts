import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActivityItemComponent } from './activity-item/activity-item.component';

@NgModule({
  declarations: [ActivityItemComponent],
  imports: [CommonModule, RouterModule],
  exports: [ActivityItemComponent],
})
export class SharedModule {}
