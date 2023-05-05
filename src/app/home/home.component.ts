import { Component, OnInit } from '@angular/core';
import { ACTIVITIES } from '../data/activities.data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  publishedActivities = ACTIVITIES.filter((a) => a.state === 'published');

  private sortOrder: number = 1;

  constructor() {}

  ngOnInit(): void {}

  isCheap(activity: any): boolean {
    return activity.price < 100;
  }

  getClasses(activity: any): string {
    return activity.ageCategory;
  }

  onButtonClick() {
    this.sortOrder = this.sortOrder * -1;
    this.sortActivities();
  }

  private sortActivities() {
    this.publishedActivities.sort(
      (a, b) => (a.price - b.price) * this.sortOrder
    );
  }
}
