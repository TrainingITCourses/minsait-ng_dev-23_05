import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivitiesService } from '../data/activities.service';
import { Activity } from '../data/activity.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  publishedActivities: Activity[] = [];
  publishedActivities$: Observable<Activity[]>;

  private sortOrder: number = 1;

  constructor(private activitiesService: ActivitiesService) {
    this.publishedActivities = activitiesService.getPublishedActivities();
    this.publishedActivities$ = activitiesService.getPublishedActivities$();
  }

  ngOnInit(): void {}

  onSort() {
    this.sortOrder = this.sortOrder * -1;
    this.sortActivities();
  }

  private sortActivities() {
    this.activitiesService.sortByPrice(
      this.publishedActivities,
      this.sortOrder
    );
  }
}
