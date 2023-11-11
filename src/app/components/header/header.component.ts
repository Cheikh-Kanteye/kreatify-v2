import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  toggleMenu: boolean = false;
  isScrolled: boolean = false;

  @HostListener('window:scroll')
  onWindowScroll() {
    window.scrollY >= 80 ? (this.isScrolled = true) : (this.isScrolled = false);
  }
}
