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
  PtDialogService,
  PtShowCase,
} from '@pars-lib/public-api';
import { SampleComponent } from '../../components/sample-component/sample-component';

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
    PtShowCase,
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
  public isLoading = signal<boolean>(false);
  public currentPage = signal<number>(0);
  public pageSize = signal<number>(5);
  public firstIndex = signal<number>(0);

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

  public disabledLabel = 'disabled';

  public onComplete() {
    console.warn('compleate');
  }

  public stepChange(event: number) {
    console.warn('event in step Change=>', event);
  }

  private allItems = signal<string[]>(['1', '11', '12', '2', '22', '3', '33', '4', '44', '5']);
  public suggestionAutoCompletes = signal<string[]>([]);
  public selectedValue = signal<string | null>(null);
  public search(query: string | null): void {
    console.warn('جستجو:', query);

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
      console.warn('نتایج:', filtered);
    }, 300);
  }
  // وقتی مقدار انتخاب شد
  public onValueChange(value: string | null): void {
    console.warn('مقدار انتخاب شده:', value);
    this.selectedValue.set(value);

    // می‌تونی کاری که میخوای انجام بدی
    if (value) {
      // مثلاً ذخیره در دیتابیس
    }
  }

  //for dialog
  //private dialogService = inject(DialogService);

  private appDialogService = inject(PtDialogService);
  // Signal for storing results
  lastResult = signal<any>(null);
  /**
   * Open basic dialog with component
   */
  public openBasicDialog() {
    const ref = this.appDialogService.open(SampleComponent, {
      header: 'View User',
      showHeader: true,
      showFooter: false,
      draggable: true,
      dismissableMask: true,
      saveTitle: 'ذخیره سفارشی',
      cancelTitle: 'کنسل سفارشی',

      data: {
        mode: 'view from openBasicDialog',
      },
    });

    ref?.onClose.subscribe((result) => {
      console.warn('Dialog closed:', result);
      this.lastResult.set(result);
    });
  }

  /**
   * Open dialog with footer actions
   */
  openDialogWithFooter() {
    const ref = this.appDialogService.open(SampleComponent, {
      header: 'Edit User',
      // width: '600px',
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
        console.warn('✅ Data saved:', result.data);
        // Show success message
      } else if (result?.action === 'cancel') {
        console.warn('❌ Operation cancelled');
      } else if (result?.action === 'close') {
        console.warn('❌ Dialog closed');
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
      console.warn('Text dialog closed:', result);
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
        cancelTitle: 'انصراف سفارشی',
        saveTitle: 'ثبت سفارشی',
      },
    );

    ref?.onClose.subscribe((result) => {
      this.lastResult.set(result);

      if (result?.action === 'save') {
        console.warn('✅ User confirmed action');
        // Proceed with action
      } else if (result?.action === 'cancel') {
        console.warn('❌ User cancelled action');
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
          console.warn('✅ Saved:', result.data);
          break;
        case 'cancel':
          console.warn('❌ Cancelled');
          break;
        case 'close':
          console.warn('❌ Closed');
          break;
        case 'dismiss':
          console.warn('❌ Dismissed (clicked outside)');
          break;
        default:
          console.warn('❌ Unknown action:', result);
      }
    });
  }
}
