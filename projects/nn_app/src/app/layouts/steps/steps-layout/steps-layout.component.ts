import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-steps-layout',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './steps-layout.component.html',
  styleUrl: './steps-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BmnStepsLayoutComponent {
  private cdr = inject(ChangeDetectorRef);
}
