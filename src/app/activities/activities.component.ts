import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from '../data/activities.service';
import { Activity } from '../data/activity.type';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css'],
})
export class ActivitiesComponent implements OnInit {
  allActivities: Activity[] = []; // this.activitiesService.getAllActivities();

  constructor(private activitiesService: ActivitiesService) {
    // this.allActivities = activitiesService.getAllActivities();
  }

  ngOnInit(): void {
    this.allActivities = this.activitiesService.getAllActivities();
  }
}
