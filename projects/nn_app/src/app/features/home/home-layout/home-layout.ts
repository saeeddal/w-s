import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home-layout',
  imports: [RouterOutlet],
  templateUrl: './home-layout.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './home-layout.scss',
})
export class HomeLayout {}
