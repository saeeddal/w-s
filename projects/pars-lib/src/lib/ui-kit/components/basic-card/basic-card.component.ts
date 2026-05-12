import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { CardBgColor, CardBorderColor, CardPadding, CardRadius } from './_/basic-card-type';
import { UK_TYPE } from '../../../uk-type';

@Component({
  selector: 'pt-basic-card',
  imports: [CommonModule],
  templateUrl: './basic-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './basic-card.component.scss',
})
export class PtBasicCard {
  @Input()
  public padding: CardPadding = UK_TYPE.CARD.PADDING.MEDIUM;

  @Input()
  public bgColor: CardBgColor = UK_TYPE.CARD.BG_COLOR.GRAY;

  @Input()
  public radius: CardRadius = UK_TYPE.CARD.RADIUS.MEDIUM;

  @Input()
  public borderColor: CardBorderColor = UK_TYPE.CARD.BORDER_COLOR.BLUE;
}
