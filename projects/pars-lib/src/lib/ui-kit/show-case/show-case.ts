import { NgComponentOutlet } from '@angular/common';
import { Component, signal } from '@angular/core';
import { PtButton } from '../components';

@Component({
  selector: 'pt-show-case',
  imports: [NgComponentOutlet, PtButton],
  templateUrl: './show-case.html',
  styleUrl: './show-case.scss',
})
export class PtShowCase {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  currentComponent = signal<any>(null);

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
        component = (await import('../components/radio-button/radio-button')).PtRadioButton;
        break;
      case 4:
        component = (await import('../components/radio-button-group/radio-button-group'))
          .PtRadioButtonGroup;
        break;
      case 5:
        component = (await import('../components/check-box/check-box')).PtCheckBox;
        break;
      case 6:
        component = (await import('../components/check-box-group/check-box-group')).PtCheckBoxGroup;
        break;
      case 7:
        component = (await import('../components/data-table/data-table')).PtDataTable;
        break;
      case 8:
        component = (await import('../components/persian-datepicker/persian-datepicker'))
          .PtPersianDatepicker;
        break;
      case 9:
        component = (await import('../components/stepper/stepper')).PtStepper;
        break;
      case 10:
        component = (await import('../components/auto-complete/auto-complete')).PtAutoComplete;
        break;
      case 11:
        component = (await import('../components/select/select')).PtSelect;
        break;
      case 12:
        component = (await import('../components/multi-select/multi-select')).PtMultiSelect;
        break;
      case 13:
        component = (await import('../components/image/image')).PtImage;
        break;
      case 14:
        component = (await import('../components/select/select')).PtSelect;
        break;
      case 15:
        component = (await import('../components/multi-select/multi-select')).PtMultiSelect;
        break;
      case 16:
        component = (await import('../components/image/image')).PtImage;
        break;
      case 17:
        component = (await import('../components/icon/icon')).PtIcon;
        break;
      case 18:
        component = (await import('../components/divider/divider')).PtDivider;
        break;
      case 19:
        component = (await import('../components/toggle-switch/toggle-switch')).PtToggleSwitch;
        break;
    }

    this.currentComponent.set(component);
  }
}
