import { Component, OnInit } from '@angular/core';
import { Store } from 'src/app/data/hub.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Activity Bookings';
  //foundActivities: any[] = [];
  activitiesCount: number = 0;

  constructor(private store: Store) {
    // store.getState$().subscribe((activities) => {
    //   this.foundActivities = activities;
    // });
    // store
    //   .selectStateLength$()
    //   .subscribe((length) => (this.activitiesCount = length));
    store
      .select$((state: any[]) => state.length)
      .subscribe((length) => (this.activitiesCount = length));
  }

  ngOnInit(): void {}
}
