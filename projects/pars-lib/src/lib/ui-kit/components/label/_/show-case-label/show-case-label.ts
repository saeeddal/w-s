import { Component } from '@angular/core';
import { PtLabel } from '../../label';
import { UK_TYPE } from '../../../../../../public-api';

@Component({
  selector: 'pt-show-case-label',
  imports: [PtLabel],
  templateUrl: './show-case-label.html',
  styleUrl: './show-case-label.scss',
})
export class ShowCaseLabel {
  public readonly UK_TYPE = UK_TYPE;
}
