import { Injectable } from '@angular/core';
import { ACTIVITIES } from './activities.data';
import { Activity } from './activity.type';

@Injectable({
  providedIn: 'root',
})
export class ActivitiesService {
  private activities = ACTIVITIES;

  constructor() {}

  getAllActivities(): Activity[] {
    return this.activities;
  }

  getPublishedActivities(): Activity[] {
    return this.activities.filter((a) => a.state === 'published');
  }

  sortByPrice(activities: Activity[], sortOrder: number): void {
    activities.sort((a, b) => (a.price - b.price) * sortOrder);
  }
}
