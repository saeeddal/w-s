import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-make-prescription-layout',
  imports: [RouterOutlet],
  templateUrl: './make-prescription-layout.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './make-prescription-layout.scss',
})
export class MakePrescriptionLayout {}
