import { Component } from '@angular/core';
import { PtButton, PtIcon, UK_TYPE } from '../../../../../../public-api';

@Component({
  selector: 'pt-show-case-button',
  imports: [PtButton, PtIcon],
  templateUrl: './show-case-button.html',
  styleUrl: './show-case-button.scss',
})
export class ShowCaseButton {
  public readonly UK_TYPE = UK_TYPE;
}
