import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PtLabel, UK_TYPE } from '../../../../../../pars-lib/src/public-api';
@Component({
  selector: 'bmn-not-found',
  imports: [CommonModule, RouterModule, PtLabel],
  templateUrl: './not-found.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './not-found.component.scss',
})
export class BmnNotFoundComponent {
  public readonly UK_TYPE = UK_TYPE;
}
