import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'bmn-not-found',
  imports: [CommonModule, RouterModule],
  templateUrl: './not-found.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './not-found.component.scss',
})
export class BmnNotFoundComponent {}
