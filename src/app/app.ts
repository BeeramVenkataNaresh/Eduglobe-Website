import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly menuOpen = signal(false);
  protected readonly activeDrop = signal<string | null>(null);

  protected toggleMenu(): void { this.menuOpen.update((open) => !open); }
  protected toggleDrop(drop: string): void { this.activeDrop.update((active) => active === drop ? null : drop); }
  protected closeMenu(): void { this.menuOpen.set(false); this.activeDrop.set(null); }
}
