import { NgComponentOutlet } from '@angular/common';
import { Component, signal } from '@angular/core';
import { PtButton } from '../components';
import { UK_TYPE } from '../../../public-api';

@Component({
  selector: 'pt-show-case',
  imports: [NgComponentOutlet, PtButton],
  templateUrl: './show-case.html',
  styleUrl: './show-case.scss',
})
export class PtShowCase {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  currentComponent = signal<any>(null);
  public readonly UK_TYPE = UK_TYPE;

  async loadComponent(compNumber: number) {
    let component: unknown;

    switch (compNumber) {
      case 1:
        component = (await import('../components/label/_/show-case-label/show-case-label'))
          .ShowCaseLabel;
        break;
      case 2:
        component = (await import('../components/button/_/show-case-button/show-case-button'))
          .ShowCaseButton;
        break;
      case 3:
        component = (await import('../components/input/_/show-case-input/show-case-input'))
          .PtShowCaseInput;
        break;
      case 4:
        component = (
          await import('../components/radio-button-group/_/show-case-radio/show-case-radio')
        ).PtShowCaseRadio;
        break;
      case 5:
        component = (
          await import('../components/check-box-group/_/show-case-checkbox/show-case-checkbox')
        ).PtShowCaseCheckbox;
        break;
      case 6:
        component = (
          await import('../components/data-table/_/show-case-datatable/show-case-datatable')
        ).PtShowCaseDatatable;
        break;
      case 7:
        component = (
          await import('../components/persian-datepicker/_/show-case-persian-datepicker/show-case-persian-datepicker')
        ).PtShowCasePersianDatepicker;
        break;
      case 8:
        component = (await import('../components/stepper/_/show-case-stepper/show-case-stepper'))
          .PtShowCaseStepper;
        break;
      case 9:
        component = (
          await import('../components/auto-complete/_/show-case-auto-complete/show-case-auto-complete')
        ).PtShowCaseAutoComplete;
        break;
      case 10:
        component = (await import('../components/select/_/show-case-select/show-case-select'))
          .PtShowCaseSelect;
        break;
      case 11:
        component = (
          await import('../components/multi-select/_/show-case-multi-select/show-case-multi-select')
        ).PtShowCaseMultiSelect;
        break;
      case 12:
        component = (await import('../components/image/_/show-case-image/show-case-image'))
          .PtShowCaseImage;
        break;
      case 13:
        component = (await import('../components/icon/_/show-case-icon/show-case-icon'))
          .PtShowCaseIcon;
        break;
      case 14:
        component = (await import('../components/divider/_/show-case-checkbox/show-case-divider'))
          .PtShowCaseDivider;
        break;
      case 15:
        component = (
          await import('../components/toggle-switch/_/show-case-toggle-switch/show-case-toggle-switch')
        ).PtShowCaseToggleSwitch;
        break;
    }

    this.currentComponent.set(component);
  }
}
