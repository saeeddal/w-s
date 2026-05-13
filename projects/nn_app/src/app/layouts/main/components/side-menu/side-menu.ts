import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'sidebar',
  standalone: true,
  templateUrl: './side-menu.html',
  styleUrl: './side-menu.scss',
})
export class Sidebar implements OnInit {
  collapsed = signal(false);

  openMenu = signal<string | null>(null);

  toggleMenu(menu: string) {
    this.openMenu.update((current) => (current === menu ? null : menu));
  }

  ngOnInit() {
    this.checkScreen();

    window.addEventListener('resize', () => {
      this.checkScreen();
    });
  }

  checkScreen() {
    this.collapsed.set(window.innerWidth <= 1024);
  }
}
