import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityNewComponent } from './activity-new.component';

const routes: Routes = [{ path: '', component: ActivityNewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivityNewRoutingModule { }
