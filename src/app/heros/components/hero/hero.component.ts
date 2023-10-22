import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 30;
  get capitalizedName(): string {
    return this.name.toUpperCase();
  }
  get heroDesctiption(): string {
    return `${this.name}-${this.age}`;
  }
  changeName(): void {
    this.name = 'Spiderman';
  }
  changeAge(): void {
    this.age = 28;
  }

  resetForm(): void {
    this.name = 'iroman';
    this.age = 30;
  }
}
