import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { PtLabel } from '../../../../../../../pars-lib/src/public-api';

@Component({
  selector: 'app-home-main',
  imports: [FormsModule, CommonModule, RouterModule, PtLabel],
  templateUrl: './home-main.html',
  styleUrl: './home-main.scss',
})
export class HomeMain {
  private readonly ROUTER = inject(Router);
}
