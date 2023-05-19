import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivitiesService } from '../data/activities.service';
import { Activity } from '../data/activity.type';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css'],
})
export class ActivitiesComponent implements OnInit {
  allActivities: Activity[] = []; // this.activitiesService.getAllActivities();
  // allActivities$: Observable<Activity[]> = this.httpClient.get<Activity[]>(
  //   'http://localhost:3000/activities'
  // );
  allActivities$: Observable<Activity[]> =
    this.activitiesService.getAllActivities$();

  constructor(
    private activitiesService: ActivitiesService
  ) // private httpClient: HttpClient
  {
    // this.allActivities = activitiesService.getAllActivities();
    // this.httpClient
    //   .get<Activity[]>('http://localhost:3000/activities')
    //   .subscribe((activities: Activity[]) => {
    //     this.allActivities = activities;
    //   });
  }

  ngOnInit(): void {
    // this.allActivities = this.activitiesService.getAllActivities();
  }
}
