import { Component } from '@angular/core';
import { CountersService } from './counters.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  host: {
    '(click)': 'clickCounter()',
  },
})
export class AppComponent  {
  name = 'Angular';

  constructor(private counters: CountersService) {}

  public clickCounter() {
    this.counters.updateClickCounter();
  }
}
