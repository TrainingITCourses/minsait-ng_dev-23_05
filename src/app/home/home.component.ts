import { Component, OnInit } from '@angular/core';
import { ACTIVITIES } from '../data/activities.data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  publishedActivities = ACTIVITIES;

  constructor() {}

  ngOnInit(): void {}
}
