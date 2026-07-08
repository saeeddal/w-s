import { Component, signal } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UK_TYPE } from '../../../../../uk-type';
import { PtToggleSwitch } from '../../toggle-switch';

@Component({
  selector: 'pt-show-case-toggle-switch',
  imports: [ReactiveFormsModule, FormsModule, PtToggleSwitch],
  templateUrl: './show-case-toggle-switch.html',
  styleUrl: './show-case-toggle-switch.scss',
})
export class PtShowCaseToggleSwitch {
  public readonly UK_TYPE = UK_TYPE;
  protected toggleValue = signal(true);
  protected toggleValueChange(value: boolean): void {
    this.toggleValue.set(value);
  }
}
