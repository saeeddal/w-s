import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BreadcrumbService } from '../../services';
import { PtLabel } from '../label/label.component';
import { UK_TYPE } from '../../../uk-type';

@Component({
  selector: 'pt-breadcrumb',
  imports: [CommonModule, RouterModule, PtLabel],
  templateUrl: './breadcrumb.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './breadcrumb.scss',
})
export class PtBreadcrumb {
  breadcrumbService = inject(BreadcrumbService);

  breadcrumbs$ = this.breadcrumbService.breadcrumbs$;

  public readonly UK_TYPE = UK_TYPE;
}
