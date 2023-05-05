import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copy-right',
  templateUrl: './copy-right.component.html',
  styleUrls: ['./copy-right.component.css'],
})
export class CopyRightComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  getYear(): number {
    return new Date().getFullYear();
  }
}
