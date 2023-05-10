import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css'],
})
export class ActivityDetailComponent implements OnInit {
  activitySlug: string = 'que-valiese-algo';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.activitySlug = this.route.snapshot.params['slug'];
  }
}
