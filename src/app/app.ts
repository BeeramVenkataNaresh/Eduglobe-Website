import { Component, signal } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  /** Customer-specific details come from src/environments/environment.ts. */
  protected readonly customer = environment.customer;
  protected readonly currentYear = new Date().getFullYear();
  protected readonly menuOpen = signal(false);
  protected readonly activeDrop = signal<string | null>(null);

  protected toggleMenu(): void { this.menuOpen.update((open) => !open); }
  protected toggleDrop(drop: string): void { this.activeDrop.update((active) => active === drop ? null : drop); }
  protected closeMenu(): void { this.menuOpen.set(false); this.activeDrop.set(null); }
}
