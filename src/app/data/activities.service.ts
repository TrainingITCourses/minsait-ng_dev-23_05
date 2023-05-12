import { Injectable } from '@angular/core';
import { ACTIVITIES, AGE_CATEGORIES } from './activities.data';
import { Activity } from './activity.type';

@Injectable({
  providedIn: 'root',
})
export class ActivitiesService {
  private activities = ACTIVITIES;
  public emptyActivity: Activity = {
    id: 0,
    title: '',
    description: '',
    state: 'draft',
    price: 0,
    currency: 'EUR',
    date: '',
    location: '',
    minParticipants: 0,
    maxParticipants: 0,
    ageCategory: 'adult',
    slug: '',
    userId: 0,
  };

  constructor() {}

  getAllActivities(): Activity[] {
    return this.activities;
  }

  getPublishedActivities(): Activity[] {
    return this.activities.filter((a) => a.state === 'published');
  }

  getBySlug(slug: string): Activity {
    return this.activities.find((a) => a.slug === slug) ?? this.emptyActivity;
  }

  sortByPrice(activities: Activity[], sortOrder: number): void {
    activities.sort((a, b) => (a.price - b.price) * sortOrder);
  }

  postActivity(activity: Activity): void {
    this.activities.push(activity);
  }

  getAgeCategories() {
    return AGE_CATEGORIES;
  }
}
