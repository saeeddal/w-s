import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-general-layout',
  templateUrl: './general-layout.component.html',
  styleUrl: './general-layout.component.scss',
  imports: [RouterOutlet, CommonModule],
})
export class BmnGeneralLayoutComponent {}
