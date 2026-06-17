import { Component, inject, ChangeDetectionStrategy, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import {
  PtLabel,
  PtPersianDatepicker,
  UK_TYPE,
} from '../../../../../../../pars-lib/src/public-api';

@Component({
  selector: 'app-home-main',
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    PtLabel,
    PtPersianDatepicker,
    ReactiveFormsModule,
  ],
  templateUrl: './home-main.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './home-main.scss',
})
export class HomeMain {
  public readonly UK_TYPE = UK_TYPE;
  public myDate = signal(new Date());
  public myDate2 = new FormControl(new Date());
  private readonly ROUTER = inject(Router);
}
