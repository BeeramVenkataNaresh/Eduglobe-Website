import { AfterViewInit, Component, signal } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit {
  /** Customer-specific details come from src/environments/environment.ts. */
  protected readonly customer = environment.customer;
  protected readonly currentYear = new Date().getFullYear();
  protected readonly menuOpen = signal(false);
  protected readonly activeDrop = signal<string | null>(null);

  protected toggleMenu(): void { this.menuOpen.update((open) => !open); }
  protected toggleDrop(drop: string): void { this.activeDrop.update((active) => active === drop ? null : drop); }
  protected closeMenu(): void { this.menuOpen.set(false); this.activeDrop.set(null); }

  ngAfterViewInit(): void {
    const customer = this.customer;
    const brand = `<img src="${customer.logo}" alt="${customer.name} logo" style="width:34px;height:34px;object-fit:contain" /><span>${customer.name} <em>${customer.tagline}</em></span>`;

    document.querySelectorAll<HTMLElement>('.brand').forEach((element) => (element.innerHTML = brand));
    document.querySelector<HTMLElement>('.laptop')!.textContent = customer.initials;
    document.querySelector<HTMLElement>('.panel-caption')!.innerHTML = `<i></i> Learning live from ${customer.address.city}`;

    const advisor = document.querySelector<HTMLAnchorElement>('.contact .button');
    if (advisor) advisor.href = `mailto:${customer.email}`;

    const footer = document.querySelector<HTMLElement>('footer p');
    if (footer) footer.textContent = `© ${this.currentYear} ${customer.legalName} ${customer.copyrightText}`;
  }
}
