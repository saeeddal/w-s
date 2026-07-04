import { Component } from '@angular/core';

import { PtImage, UK_TYPE } from '../../../../../../public-api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pt-show-case-image',
  imports: [ReactiveFormsModule, CommonModule, FormsModule, PtImage],
  templateUrl: './show-case-image.html',
  styleUrl: './show-case-image.scss',
})
export class PtShowCaseImage {
  public readonly UK_TYPE = UK_TYPE;
}
