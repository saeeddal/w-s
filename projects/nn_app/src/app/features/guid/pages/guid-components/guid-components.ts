import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PtShowCase, UK_TYPE } from '@pars-lib/public-api';

@Component({
  selector: 'app-guid-components',
  imports: [FormsModule, CommonModule, RouterModule, ReactiveFormsModule, PtShowCase],
  templateUrl: './guid-components.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './guid-components.scss',
})
export class GuidComponents {
  public readonly UK_TYPE = UK_TYPE;
}
