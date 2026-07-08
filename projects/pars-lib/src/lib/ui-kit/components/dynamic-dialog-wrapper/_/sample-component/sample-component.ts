import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { BaseDialog } from '../../../../../../public-api';

@Component({
  selector: 'app-sample',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule],
  templateUrl: './sample-component.html',
  styleUrl: './sample-component.scss',
})
export class SampleComponent extends BaseDialog {
  // You can override methods if needed
  override onSave(): void {
    // Do your specific business logic here
    // eslint-disable-next-line no-console
    console.log('SampleComponent specific save logic');

    // Then call super or directly close
    this.closeWithState('save', { id: 123, name: 'example' }, 'Record saved successfully');
  }
}
