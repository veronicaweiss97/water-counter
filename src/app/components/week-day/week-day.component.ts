import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Days } from './../../models/days';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-week-day',
  templateUrl: './week-day.component.html',
  styleUrls: ['./week-day.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state(
        'open',
        style({
          // height: '150px',
          opacity: 1,
        })
      ),
      state(
        'closed',
        style({
          // height: '350px',
          opacity: 0.8,
        })
      ),
      transition('open => closed', [animate('1s')]),
      transition('closed => open', [animate('0.5s')]),
    ]),
  ],
})
export class WeekDayComponent {
  @Input()
  public day!: Days;
  public isOpen = true;

  public toggleExpandedView(): void {
    this.isOpen = !this.isOpen;
  }
}
