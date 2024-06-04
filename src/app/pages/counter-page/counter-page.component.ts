import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.scss',
})
export class CounterPageComponent {
  public counter = signal(10);
  public squareCounter = computed(() => this.counter() * this.counter());

  increment(value: number) {
    this.counter.update((current) => current + value);
  }
}
