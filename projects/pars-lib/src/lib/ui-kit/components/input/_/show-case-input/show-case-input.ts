import { Component } from '@angular/core';

import { PtIcon, PtInput, UK_TYPE } from '../../../../../../public-api';

@Component({
  selector: 'pt-show-case-input',
  imports: [PtInput, PtIcon],
  templateUrl: './show-case-input.html',
  styleUrl: './show-case-input.scss',
})
export class PtShowCaseInput {
  public readonly UK_TYPE = UK_TYPE;
}
