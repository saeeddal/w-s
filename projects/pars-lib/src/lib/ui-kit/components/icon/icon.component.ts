import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { ButtonCursor } from '../button/_/button.type';
import { IconColor } from './_/icon-color';
import DEFAULT from '../../prepared-config';
import { IconSize } from './_/icon-size';
@Component({
  selector: 'pt-icon',
  imports: [CommonModule],
  templateUrl: './icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './icon.component.scss',
})
export class PtIcon {
  @Input()
  public color: IconColor = DEFAULT.icon.color;

  @Input()
  public src: string = '';

  @Input()
  public size: IconSize = DEFAULT.icon.size;

  @Input()
  public cursor: ButtonCursor = DEFAULT.button.cursor;
}
