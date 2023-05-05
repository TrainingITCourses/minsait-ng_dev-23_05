import { Component, Input, OnInit } from '@angular/core';
import { Activity } from 'src/app/data/activity.type';

@Component({
  selector: 'app-activity-item',
  templateUrl: './activity-item.component.html',
  styleUrls: ['./activity-item.component.css'],
})
export class ActivityItemComponent implements OnInit {
  @Input() activity: Activity | null = null;

  constructor() {}

  ngOnInit(): void {}

  isCheap(activity: any): boolean {
    return activity.price < 100;
  }

  getClasses(activity: any): string {
    return activity.ageCategory;
  }
}
