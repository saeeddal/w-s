import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

import {
  LabelBgColor,
  LabelBorderRadius,
  LabelDisplay,
  LabelFgColor,
  LabelHorizontalAlignment,
  LabelNumeric,
  LabelPadding,
  LabelSize,
  LabelTextWrap,
  LabelType,
  LabelTypography,
  LabelVerticalAlignment,
  LabelWeight,
  LineHeight,
  UkLabelDisplay,
  UkLineHeight,
} from './_/label.type';
import DEFAULT from '../../prepared-config';

@Component({
  selector: 'pt-label',
  imports: [CommonModule],
  templateUrl: './label.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './label.component.scss',
})
export class PtLabel {
  @Input()
  public horizontalAlignment: LabelHorizontalAlignment = DEFAULT.label.horizontalAlignment;

  @Input()
  public verticalAlignment: LabelVerticalAlignment = DEFAULT.label.verticalAlignment;

  @Input()
  public bgColor: LabelBgColor = DEFAULT.label.bgColor;

  @Input()
  public fgColor: LabelFgColor = DEFAULT.label.fgColor;

  @Input()
  public typography: LabelTypography = DEFAULT.label.typography;

  @Input()
  public labelType: LabelType = DEFAULT.label.type;

  @Input()
  public display: LabelDisplay = DEFAULT.label.display;

  @Input()
  public padding: LabelPadding = DEFAULT.label.padding;

  @Input()
  public borderRadius: LabelBorderRadius = DEFAULT.label.borderRadius;

  @Input()
  public textWrap: LabelTextWrap = DEFAULT.label.textWrap;

  @Input()
  public numeric: LabelNumeric = DEFAULT.label.numeric;

  @Input()
  public size: LabelSize = DEFAULT.label.size;

  @Input()
  public weight: LabelWeight = DEFAULT.label.weight;

  @Input()
  public lineHeight: LineHeight = UkLineHeight.NORMAL;

  @Input()
  public isRequired = false;

  // @Input()
  // public weight: LabelHeight = DEFAULT.label.height;

  @HostBinding('class.is-blocked')
  private get isBlocked(): boolean {
    return this.display === UkLabelDisplay.BLOCK;
  }

  @HostBinding('class.is-inline')
  private get isInline(): boolean {
    return this.display === UkLabelDisplay.INLINE;
  }
}
