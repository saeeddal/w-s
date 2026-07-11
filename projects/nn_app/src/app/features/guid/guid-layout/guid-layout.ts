import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-guid-layout',
  imports: [RouterOutlet],
  templateUrl: './guid-layout.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './guid-layout.scss',
})
export class GuidLayout {}
