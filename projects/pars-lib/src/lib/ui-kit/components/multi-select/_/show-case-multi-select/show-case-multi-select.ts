import { Component } from '@angular/core';

import { PtMultiSelect, UK_TYPE } from '../../../../../../public-api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pt-show-case-multi-select',
  imports: [ReactiveFormsModule, CommonModule, FormsModule, PtMultiSelect],
  templateUrl: './show-case-multi-select.html',
  styleUrl: './show-case-multi-select.scss',
})
export class PtShowCaseMultiSelect {
  public readonly UK_TYPE = UK_TYPE;
  public multiSelectItems = [
    { title: 'تثبيت نهائي', id: 1 },
    { title: 'روش پرداخت', id: 2 },
    { title: 'همراهان', id: 3 },
    { title: 'انتخاب دوره 1', id: 4 },
    { title: 'انتخاب دوره 2', id: 5 },
  ];
  public selectedFromMultiSelect = [];
}
