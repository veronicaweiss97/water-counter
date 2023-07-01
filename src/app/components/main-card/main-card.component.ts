import { Component, OnInit } from '@angular/core';
import { Days } from 'src/app/models/days';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.css']
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
  public totalAmount: number = 0

  constructor() { }

  ngOnInit(): void {
    this.getTotalAmountOfWater();
  }

  public getTotalAmountOfWater(): void {
    this.days.map((day) => this.totalAmount += day.waterAmount);
  }

}
