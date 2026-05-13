import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-loans-list',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './loans-list.html',
  styleUrl: './loans-list.scss',
})
export class LoansList {
  private readonly ROUTER = inject(Router);
}
