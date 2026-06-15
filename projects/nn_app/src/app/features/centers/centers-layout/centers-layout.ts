import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-centers-layout',
  imports: [RouterOutlet],
  templateUrl: './centers-layout.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './centers-layout.scss',
})
export class CenterLayout {}
