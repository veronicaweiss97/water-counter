import { Days } from './../../models/days';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-week-day',
  templateUrl: './week-day.component.html',
  styleUrls: ['./week-day.component.css']
})
export class WeekDayComponent implements OnInit {

  @Input()
  public day!: Days

  constructor() { }

  ngOnInit(): void {
  }

}
