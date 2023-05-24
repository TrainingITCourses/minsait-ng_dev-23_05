import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  fromEvent,
  map,
  switchMap,
} from 'rxjs';
import { ActivitiesService } from '../data/activities.service';
import { Activity } from '../data/activity.type';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css'],
})
export class ActivitiesComponent implements OnInit, AfterViewInit {
  @ViewChild('searchInput', { static: true }) searchInput!: ElementRef;
  allActivities: Activity[] = [];
  // allActivities$: Observable<Activity[]> = this.activitiesService.getAllActivities$();

  constructor(private activitiesService: ActivitiesService) {}

  ngAfterViewInit(): void {
    const source$ = fromEvent(this.searchInput.nativeElement, 'keyup');
    const value$ = source$.pipe(
      debounceTime(200),
      map((eventArg: any) => eventArg.target.value),
      filter((value: string) => value.length > 3),
      distinctUntilChanged(),
      switchMap((searchTerm: string) =>
        this.activitiesService.queryActivities$(searchTerm)
      )
    );
    value$.subscribe((activities) => {
      console.log('activities', activities);
      this.allActivities = activities;
    });
    // value$.subscribe((searchTerm: string) => {
    //   console.log('searchTerm', searchTerm);
    //   this.activitiesService
    //     .queryActivities$(searchTerm)
    //     .subscribe((activities) => {
    //       this.allActivities = activities;
    //       console.log('activities', activities);
    //     });
    // });
  }

  ngOnInit(): void {}

  onKeyUp(eventArg: any): void {
    // console.log('keyup', eventArg.target.value);
  }
}
