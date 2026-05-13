import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-loans-create',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './loans-create.html',
  styleUrl: './loans-create.scss',
})
export class LoansCreate {
  private readonly ROUTER = inject(Router);
}
