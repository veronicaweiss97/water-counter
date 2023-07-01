import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Days } from 'src/app/models/days';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state(
        'open',
        style({
          height: '150px',
          opacity: 1,
        })
      ),
      state(
        'closed',
        style({
          height: '350px',
          opacity: 0.8,
        })
      ),
      transition('open => closed', [animate('1s')]),
      transition('closed => open', [animate('0.5s')]),
    ]),
  ],
})
export class MainCardComponent implements OnInit {
  public days: Days[] = [
    { weekDay: 'Monday', waterAmount: 1.9 },
    { weekDay: 'Thursday', waterAmount: 2.0 },
    { weekDay: 'Wednesday', waterAmount: 1.5 },
    { weekDay: 'Monday', waterAmount: 2.0 },
    { weekDay: 'Friday', waterAmount: 2.6 },
    { weekDay: 'Saturday', waterAmount: 1.8 },
    { weekDay: 'Sunday', waterAmount: 2.5 },
  ];
  public totalAmount: number = 0;
  public isOpen = true;

  constructor() {}

  ngOnInit(): void {
    this.getTotalAmountOfWater();
  }

  public getTotalAmountOfWater(): void {
    this.days.map((day) => (this.totalAmount += day.waterAmount));
  }

  public toggleExpandedView(): void {
    this.isOpen = !this.isOpen;
  }
}
