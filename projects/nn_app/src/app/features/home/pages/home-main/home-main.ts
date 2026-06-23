/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  PtDataTable,
  PtLabel,
  PtMultiSelect,
  PtPersianDatepicker,
  PtStepper,
  UK_TYPE,
} from '@pars-lib/public-api';
import type { Product } from '../../helpers/mock-data';
import { MockCols, MockDataTable } from '../../helpers/mock-data';
interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  department: string;
  role: string;
  status: 'active' | 'inactive' | 'pending';
  salary: number;
  joinDate: Date;
  lastLogin: Date;
  permissions: string[];
}

@Component({
  selector: 'app-home-main',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    PtLabel,
    PtPersianDatepicker,
    ReactiveFormsModule,
    PtDataTable,
    PtStepper,
    PtMultiSelect,
  ],
  templateUrl: './home-main.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './home-main.scss',
})
export class HomeMain {
  public readonly UK_TYPE = UK_TYPE;
  public myDate = signal(new Date());
  public myDate2 = new FormControl(new Date());
  public selectedUser: IUser | null = null;
  public mockCols = MockCols;
  public mockDataTable = MockDataTable.slice(0, 5);

  public totalItems = signal<number>(6);
  public isLoading = signal<boolean>(false);
  public currentPage = signal<number>(0);
  public pageSize = signal<number>(5);
  public firstIndex = signal<number>(0);

  // Event handlers
  onRowSelect(event: any) {
    console.log('Row selected:', event);
  }

  onRowSelected(event: any) {
    this.selectedUser = event.data;
    console.log('User selected:', this.selectedUser);
  }

  // Handle page changes from the table
  public onPageChanged(event: { page: number; rows: number; first: number }) {
    if (event.page === undefined || event.rows === undefined || event.first === undefined) {
      return;
    }
    this.isLoading.set(true);

    if (!event) {
      this.isLoading.set(false);
      return;
    }

    const sorted = [...MockDataTable].sort((a, b) => a.id - b.id);

    const start = event.page * event.rows;
    const end = start + event.rows;

    this.mockDataTable = sorted.slice(start, end);

    this.isLoading.set(false);
  }

  onFilterChange(event: any) {
    console.log('Filter changed:', event);
  }

  onSortChange(event: any) {
    console.log('Sort changed:', event);
  }

  onColumnResize(event: any) {
    console.log('Column resized:', event);
  }

  onExportData() {
    console.log('Exporting data...');
    alert('Data exported successfully! (Mock)');
  }

  // Handle row selection
  public onSelectionChanged(data: Product | Product[] | null): void {
    console.log('Selected product:', data);
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  public steps = [
    { title: 'تثبيت نهائي' },
    { title: 'روش پرداخت' },
    { title: 'همراهان' },
    { title: 'انتخاب دوره 1' },
    { title: 'انتخاب دوره 2' },
  ];

  public multiSelectItems = [
    { title: 'تثبيت نهائي', id: 1 },
    { title: 'روش پرداخت', id: 2 },
    { title: 'همراهان', id: 3 },
    { title: 'انتخاب دوره 1', id: 4 },
    { title: 'انتخاب دوره 2', id: 5 },
  ];

  public selectedFromMultiSelect = [];
  public multiSelectItems2 = [];

  public onComplete() {
    console.log('compleate');
  }

  public stepChange(event: number) {
    console.log('event in step Change=>', event);
  }
}
