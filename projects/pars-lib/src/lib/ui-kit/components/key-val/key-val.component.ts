import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PtLabel } from '../label/label.component';
import { UK_TYPE } from '../../../uk-type';

@Component({
  selector: 'pt-key-val',
  imports: [PtLabel],
  templateUrl: './key-val.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './key-val.component.scss',
})
export class PtKeyVal {
  public readonly UK_TYPE = UK_TYPE;
}
