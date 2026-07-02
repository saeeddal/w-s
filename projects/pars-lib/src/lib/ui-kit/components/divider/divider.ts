import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import type { DividerBgColor, DividerDisplay, DividerMargin, DividerSize } from './_/divider.type';
import DEFAULT from '../../prepared-config';

@Component({
  selector: 'pt-divider',
  imports: [CommonModule],
  templateUrl: './divider.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './divider.scss',
})
export class PtDivider {
  @Input()
  public bgColor: DividerBgColor = DEFAULT.divider.bgColor;

  @Input()
  public size: DividerSize = DEFAULT.divider.size;

  @Input()
  public margin: DividerMargin = DEFAULT.divider.margin;

  @Input()
  public marginY: DividerMargin = DEFAULT.divider.margin;

  @Input()
  public display: DividerDisplay = DEFAULT.divider.display;
}
