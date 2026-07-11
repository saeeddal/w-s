import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PtLabel, UK_TYPE } from '@pars-lib/public-api';

@Component({
  selector: 'app-guid-form',
  imports: [FormsModule, CommonModule, RouterModule, PtLabel, ReactiveFormsModule],
  templateUrl: './guid-form.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './guid-form.scss',
})
export class GuidForm {
  public readonly UK_TYPE = UK_TYPE;
}
