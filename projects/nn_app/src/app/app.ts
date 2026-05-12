import { Component, signal } from '@angular/core';

import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly TITLE = signal('ng20-2');
  public toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
  }
}
