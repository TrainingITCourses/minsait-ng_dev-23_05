import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActivitiesService } from 'src/app/data/activities.service';
import { Activity } from 'src/app/data/activity.type';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css'],
})
export class ActivityDetailComponent implements OnInit {
  activitySlug: string = 'que-valiese-algo';
  activity: Activity = this.activitiesService.emptyActivity;

  constructor(
    private route: ActivatedRoute,
    private activitiesService: ActivitiesService
  ) {}

  ngOnInit(): void {
    this.activitySlug = this.route.snapshot.params['slug'];
    this.activity = this.activitiesService.getBySlug(this.activitySlug);
  }
}
