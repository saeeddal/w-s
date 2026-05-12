import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

import {
  LabelFgColor,
  LabelHorizontalAlignment,
  LabelSize,
  LabelWeight,
} from '../label/_/label.type';

import {
  ButtonBgColor,
  ButtonBorderColor,
  ButtonCursor,
  ButtonDisplay,
  ButtonHeight,
  ButtonPadding,
  ButtonType,
  ButtonUkType,
  UkButtonDisplay,
} from './_/button.type';
import { PtLabel } from '../label/label.component';
import DEFAULT from '../../prepared-config';
import { UK_TYPE } from '../../../uk-type';

@Component({
  selector: 'pt-button',
  imports: [CommonModule, PtLabel],
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './button.component.scss',
})
export class PtButton {
  @Input()
  public bgColor: ButtonBgColor = DEFAULT.button.bgColor;

  @Input()
  public borderColor: ButtonBorderColor = DEFAULT.button.borderColor;

  @Input()
  public display: ButtonDisplay = DEFAULT.button.display;

  @Input()
  public padding: ButtonPadding = DEFAULT.button.padding;

  @Input()
  public buttonType: ButtonType = DEFAULT.button.type;

  @Input()
  public cursor: ButtonCursor = DEFAULT.button.cursor;

  @Input()
  public height: ButtonHeight = DEFAULT.button.height;

  @Input()
  public isDisabled = false;

  // label
  @Input()
  public fgColor: LabelFgColor = DEFAULT.label.fgColor;

  @Input()
  public labelSize: LabelSize = DEFAULT.label.size;

  @Input()
  public labelWeight: LabelWeight = DEFAULT.label.weight;

  @Input()
  public horizontalAlignment: LabelHorizontalAlignment = DEFAULT.label.horizontalAlignment;

  // type
  @Input()
  public ukType: ButtonUkType = DEFAULT.button.ukType;

  @Input()
  public borderRadius = 4;

  public readonly UK_TYPE = UK_TYPE;

  @HostBinding('class.is-blocked')
  private get isBlocked(): boolean {
    return this.display === UkButtonDisplay.BLOCK;
  }
}
