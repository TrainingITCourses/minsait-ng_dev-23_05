import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css'],
})
export class HomeHeaderComponent implements OnInit {
  @Input() numberOfActivities: number = 0;
  @Output() sort: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}
  onButtonClick() {
    this.sort.emit();
  }
}
