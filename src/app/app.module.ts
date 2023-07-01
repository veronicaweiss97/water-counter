import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainCardComponent } from './components/main-card/main-card.component';
import { WeekDayComponent } from './components/week-day/week-day.component';

@NgModule({
  declarations: [
    AppComponent,
    MainCardComponent,
    WeekDayComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
