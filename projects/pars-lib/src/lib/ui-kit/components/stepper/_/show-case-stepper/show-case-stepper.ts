import { Component } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UK_TYPE } from '../../../../../uk-type';
import { PtStepper } from '../../stepper';

@Component({
  selector: 'pt-show-case-stepper',
  imports: [ReactiveFormsModule, FormsModule, PtStepper],
  templateUrl: './show-case-stepper.html',
  styleUrl: './show-case-stepper.scss',
})
export class PtShowCaseStepper {
  public readonly UK_TYPE = UK_TYPE;
  public steps = [{ title: ' اول' }, { title: ' دوم ' }, { title: 'نهایی' }];
  public onComplete() {
    // eslint-disable-next-line no-console
    console.warn('compleate');
  }
  public stepChange(event: number) {
    // eslint-disable-next-line no-console
    console.warn('event in step Change=>', event);
  }
}
