import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ACTIVITIES, AGE_CATEGORIES } from './activities.data';
import { Activity } from './activity.type';

@Injectable({
  providedIn: 'root',
})
export class ActivitiesService {
  private url = 'http://localhost:3000/activities';
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

  constructor(private httpClient: HttpClient) {}

  getAllActivities(): Activity[] {
    return this.activities;
  }

  getAllActivities$(): Observable<Activity[]> {
    return this.httpClient.get<Activity[]>(this.url);
  }

  getPublishedActivities(): Activity[] {
    return this.activities.filter((a) => a.state === 'published');
  }

  getPublishedActivities$(): Observable<Activity[]> {
    return this.httpClient
      .get<Activity[]>(this.url)
      .pipe(
        map((activities) => activities.filter((a) => a.state === 'published'))
      );
  }

  getBySlug(slug: string): Activity {
    return this.activities.find((a) => a.slug === slug) ?? this.emptyActivity;
  }

  getBySlug$(slug: string): Observable<Activity | undefined> {
    return this.httpClient
      .get<Activity[]>(this.url + '/?slug=' + slug)
      .pipe(map((activities: Activity[]): Activity => activities[0]));
  }

  sortByPrice(activities: Activity[], sortOrder: number): void {
    activities.sort((a, b) => (a.price - b.price) * sortOrder);
  }

  postActivity(activity: Activity): void {
    this.activities.push(activity);
  }

  postActivity$(activity: Activity): Observable<any> {
    activity.slug = activity.title.toLowerCase().replace(/ /g, '-');
    activity.currency = 'EUR';
    return this.httpClient.post<Activity>(this.url, activity);
  }

  getAgeCategories() {
    return AGE_CATEGORIES;
  }
}
