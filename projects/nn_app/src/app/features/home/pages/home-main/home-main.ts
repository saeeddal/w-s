import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PtLabel, UK_TYPE, PtShowCase } from '@pars-lib/public-api';

@Component({
  selector: 'app-home-main',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, PtLabel, ReactiveFormsModule, PtShowCase],
  templateUrl: './home-main.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './home-main.scss',
})
export class HomeMain {
  public readonly UK_TYPE = UK_TYPE;
}
