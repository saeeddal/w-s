/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  PtCheckBox,
  PtCheckBoxGroup,
  PtDataTable,
  PtLabel,
  PtMultiSelect,
  PtPersianDatepicker,
  PtRadioButton,
  PtRadioButtonGroup,
  PtStepper,
  UK_TYPE,
  PtAutoComplete,
  PtButton,
} from '@pars-lib/public-api';
import type { Product } from '../../helpers/mock-data';
import { MockCols, MockDataTable } from '../../helpers/mock-data';
import { SampleComponent } from '../../components/sample-component/sample-component';
import { AppDialogService } from '@app/shared/services/dialog.service';
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
    PtCheckBoxGroup,
    PtCheckBox,
    PtRadioButtonGroup,
    PtRadioButton,
    PtAutoComplete,
    PtButton,
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

  public selectedValues = [1, 2];
  //public tempValue: any = null!;
  public tempValueRadioGroup!: number;
  public disabledLabel = 'disabled';
  public checkBoxItems: { value: number; label: string; disabled: boolean }[] = [
    {
      value: 1,
      label: 'نقد',
      disabled: false,
    },
    {
      value: 2,
      label: 'اقساط',
      disabled: false,
    },
    {
      value: 3,
      label: 'رایگان',
      disabled: false,
    },
    {
      value: 4,
      label: 'جدید و دیزیبل',
      disabled: true,
    },
  ];

  public radioBoxItems: { id: number; text: string; disabled: boolean }[] = [
    {
      id: 1,
      text: 'نقد',
      disabled: false,
    },
    {
      id: 2,
      text: 'اقساط',
      disabled: false,
    },
    {
      id: 3,
      text: 'رایگان',
      disabled: false,
    },
    {
      id: 4,
      text: 'جدید و دیزیبل',
      disabled: true,
    },
  ];

  public onComplete() {
    console.log('compleate');
  }

  public stepChange(event: number) {
    console.log('event in step Change=>', event);
  }

  private allItems = signal<string[]>(['1', '11', '12', '2', '22', '3', '33', '4', '44', '5']);
  public suggestionAutoCompletes = signal<string[]>([]);
  public selectedValue = signal<string | null>(null);
  public search(query: string | null): void {
    console.log('جستجو:', query);

    if (!query || query.trim().length === 0) {
      // اگر جستجو خالی بود، هیچ چیزی نشون نده
      this.suggestionAutoCompletes.set([]);
      this.isLoading.set(false);
      return;
    }

    // شبیه‌سازی بارگذاری
    this.isLoading.set(true);

    // ✅ فیلتر کردن و set کردن مقدار جدید
    const filtered = this.allItems().filter((item) =>
      item.toLowerCase().includes(query.toLowerCase().trim()),
    );

    // با تاخیر شبیه‌سازی درخواست سرور
    setTimeout(() => {
      this.suggestionAutoCompletes.set(filtered);
      this.isLoading.set(false);
      console.log('نتایج:', filtered);
    }, 300);
  }
  // وقتی مقدار انتخاب شد
  public onValueChange(value: string | null): void {
    console.log('مقدار انتخاب شده:', value);
    this.selectedValue.set(value);

    // می‌تونی کاری که میخوای انجام بدی
    if (value) {
      // مثلاً ذخیره در دیتابیس
    }
  }

  //for dialog
  //private dialogService = inject(DialogService);

  private appDialogService = inject(AppDialogService);
  // Signal for storing results
  lastResult = signal<any>(null);
  /**
   * Open basic dialog with component
   */
  public openBasicDialog() {
    const ref = this.appDialogService.open(SampleComponent, {
      header: 'View User',
      width: '500px',
      showHeader: true,
      showFooter: false,
      data: {
        mode: 'view from openBasicDialog',
      },
    });

    ref?.onClose.subscribe((result) => {
      console.log('Dialog closed:', result);
      this.lastResult.set(result);
    });
  }

  /**
   * Open dialog with footer actions
   */
  openDialogWithFooter() {
    const ref = this.appDialogService.open(SampleComponent, {
      header: 'Edit User',
      width: '600px',
      showHeader: true,
      showFooter: true,
      data: {
        mode: 'edit',
      },
    });

    ref?.onClose.subscribe((result) => {
      this.lastResult.set(result);

      // Check close state
      if (result?.action === 'save') {
        console.log('✅ Data saved:', result.data);
        // Show success message
      } else if (result?.action === 'cancel') {
        console.log('❌ Operation cancelled');
      } else if (result?.action === 'close') {
        console.log('❌ Dialog closed');
      }
    });
  }

  /**
   * Open dialog with save (component internal buttons)
   */
  openDialogWithSave() {
    const ref = this.appDialogService.open(SampleComponent, {
      header: 'Create User',
      width: '600px',
      showHeader: true,
      showFooter: false,
      data: {
        mode: 'create',
      },
    });

    ref?.onClose.subscribe((result) => {
      this.lastResult.set(result);

      // Check close state from component
      if (result?.action === 'save') {
        console.log('✅ User created:', result.data);
        // Handle user creation
      } else if (result?.action === 'cancel') {
        console.log('❌ Creation cancelled');
      }
    });
  }

  /**
   * NEW: Open text-only dialog
   */
  openTextDialog() {
    const ref = this.appDialogService.openText(
      'This is a simple text dialog. You can pass any text content here.\n\n' +
        'It supports multi-line text and can be used for notifications, confirmations, or info messages.',
      {
        header: 'Information',
        width: '500px',
        showHeader: true,
        showFooter: false,
      },
    );

    ref?.onClose.subscribe((result) => {
      console.log('Text dialog closed:', result);
      this.lastResult.set(result);
    });
  }

  /**
   * NEW: Open text dialog with footer actions
   */
  openTextDialogWithFooter() {
    const ref = this.appDialogService.openText(
      'Are you sure you want to proceed with this action?\n\n' + 'This operation cannot be undone.',
      {
        header: 'Confirm Action',
        width: '500px',
        showHeader: true,
        showFooter: true,
      },
    );

    ref?.onClose.subscribe((result) => {
      this.lastResult.set(result);

      if (result?.action === 'save') {
        console.log('✅ User confirmed action');
        // Proceed with action
      } else if (result?.action === 'cancel') {
        console.log('❌ User cancelled action');
      }
    });
  }

  /**
   * Open with custom close state from component
   */
  openDialogWithCustomState() {
    const ref = this.appDialogService.open(SampleComponent, {
      header: 'Custom State Demo',
      width: '600px',
      showHeader: true,
      showFooter: false,
      data: {
        mode: 'edit',
      },
    });

    ref?.onClose.subscribe((result) => {
      this.lastResult.set(result);

      // Handle different close states
      switch (result?.action) {
        case 'save':
          console.log('✅ Saved:', result.data);
          break;
        case 'cancel':
          console.log('❌ Cancelled');
          break;
        case 'close':
          console.log('❌ Closed');
          break;
        case 'dismiss':
          console.log('❌ Dismissed (clicked outside)');
          break;
        default:
          console.log('❌ Unknown action:', result);
      }
    });
  }
}
