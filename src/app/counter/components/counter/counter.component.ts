// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-counter',
//   template: '<h1>Hi Counter</h1>',
// })
// export class CounterComponent {}

import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h3>Counter: {{ counter }}</h3>
    <button (click)="increateBy(1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="increateBy(-1)">-1</button>`,
})
export class CounterComponent {
  public counter: number = 10;
  public increateBy(value: number): void {
    this.counter += value;
  }
  public reset(): void {
    this.counter = 10;
  }
}
