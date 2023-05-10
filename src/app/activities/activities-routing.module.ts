import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './activities.component';

const routes: Routes = [
  {
    path: '',
    component: ActivitiesComponent,
  },
  {
    path: 'new',
    loadChildren: () =>
      import('./activity-new/activity-new.module').then(
        (m) => m.ActivityNewModule
      ),
  },
  {
    path: ':slug',
    loadChildren: () =>
      import('./activity-detail/activity-detail.module').then(
        (m) => m.ActivityDetailModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivitiesRoutingModule {}
