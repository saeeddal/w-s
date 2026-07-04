/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, signal } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UK_TYPE } from '../../../../../uk-type';
import { PtAutoComplete } from '../../auto-complete';

@Component({
  selector: 'pt-show-case-auto-complete',
  imports: [ReactiveFormsModule, FormsModule, PtAutoComplete],
  templateUrl: './show-case-auto-complete.html',
  styleUrl: './show-case-auto-complete.scss',
})
export class PtShowCaseAutoComplete {
  public readonly UK_TYPE = UK_TYPE;
  public isLoading = signal<boolean>(false);
  public suggestionAutoCompletes = signal<string[]>([]);
  private allItems = signal<string[]>(['1', '11', '12', '2', '22', '3', '33', '4', '44', '5']);
  public selectedValue = signal<string | null>(null);

  public search(query: string | null): void {
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
}
