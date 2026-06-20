/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  PtDataTable,
  PtLabel,
  PtPersianDatepicker,
  UK_TYPE,
} from '../../../../../../../pars-lib/src/public-api';
import { dataGridConfig } from '../../helpers/mock-data';

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
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    PtLabel,
    PtPersianDatepicker,
    ReactiveFormsModule,
    PtDataTable,
  ],
  templateUrl: './home-main.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './home-main.scss',
})
export class HomeMain {
  public readonly UK_TYPE = UK_TYPE;
  public myDate = signal(new Date());
  public myDate2 = new FormControl(new Date());
  public mockData = signal<IUser[]>([]);
  public gridConfig = dataGridConfig;
  public selectedUser: IUser | null = null;
  loading = signal<boolean>(false);
  constructor() {
    this.generateMockData();
  }

  // Event handlers
  onRowSelect(event: any) {
    console.log('Row selected:', event);
  }

  onRowSelected(event: any) {
    this.selectedUser = event.data;
    console.log('User selected:', this.selectedUser);
  }

  onPageChange(event: any) {
    console.log('Page changed:', event);
    // Here you would typically fetch new data for the page
    this.loading.set(true);
    setTimeout(() => {
      this.loading.set(false);
    }, 500);
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

  onCellEdit(event: any) {
    console.log('Cell edited:', event);
    // Update the data
    this.mockData.update((data) => {
      const index = data.findIndex((item) => item.id === event.data.id);
      if (index !== -1) {
        data[index] = event.data;
      }
      return [...data];
    });
  }

  getStatusIcon(status: string): string {
    switch (status) {
      case 'active':
        return 'pi pi-check-circle';
      case 'inactive':
        return 'pi pi-times-circle';
      case 'pending':
        return 'pi pi-clock';
      default:
        return 'pi pi-circle';
    }
  }

  public pageChanged(event: { first: number; rows: number }) {
    console.warn('event=>', event);
  }

  private generateMockData() {
    const departments = ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance', 'Operations'];
    const roles = ['Developer', 'Manager', 'Designer', 'Analyst', 'Director', 'Lead'];
    const statuses: ('active' | 'inactive' | 'pending')[] = [
      'active',
      'active',
      'active',
      'inactive',
      'pending',
    ];
    const firstNames = [
      'John',
      'Jane',
      'Michael',
      'Sarah',
      'Robert',
      'Emily',
      'David',
      'Lisa',
      'James',
      'Maria',
    ];
    const lastNames = [
      'Smith',
      'Johnson',
      'Williams',
      'Brown',
      'Jones',
      'Garcia',
      'Miller',
      'Davis',
      'Rodriguez',
      'Martinez',
    ];
    const permissions = [
      ['read'],
      ['read', 'write'],
      ['read', 'write', 'delete'],
      ['read', 'write', 'delete', 'admin'],
    ];

    const data: IUser[] = [];

    for (let i = 1; i <= 50; i++) {
      const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
      const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
      const department = departments[Math.floor(Math.random() * departments.length)];
      const role = roles[Math.floor(Math.random() * roles.length)];
      const status = statuses[Math.floor(Math.random() * statuses.length)];
      const permSet = permissions[Math.floor(Math.random() * permissions.length)];

      const user: IUser = {
        id: i,
        firstName,
        lastName,
        email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@company.com`,
        department,
        role,
        status,
        salary: Math.floor(Math.random() * 100000) + 40000,
        joinDate: new Date(
          2020 + Math.floor(Math.random() * 4),
          Math.floor(Math.random() * 12),
          Math.floor(Math.random() * 28) + 1,
        ),
        lastLogin: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000),
        permissions: permSet as string[],
      };

      data.push(user);
    }

    // Sort by ID
    data.sort((a, b) => a.id - b.id);
    this.mockData.set(data);
  }
}
