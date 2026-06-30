// auto-complete.ts
import { Component, input, output, signal, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { AutoCompleteSelectEvent } from 'primeng/autocomplete';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pt-auto-complete',
  standalone: true,
  imports: [AutoCompleteModule, FormsModule, CommonModule],
  templateUrl: './auto-complete.html',
  styleUrl: './auto-complete.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PtAutoComplete<T> {
  // ورودی‌ها
  public items = input<T[]>([]);
  public placeholder = input<string>('جستجو...');
  public loading = input<boolean>(false);
  public minLength = input<number>(1);
  public delay = input<number>(300);

  // خروجی‌ها
  public changeValue = output<T | null>();
  public searchEvent = output<string>(); // برای جستجو
  public selectedItem = output<T>(); // برای انتخاب

  // مقدار انتخاب شده
  public value = signal<T | null>(null);

  // برای نمایش بارگذاری
  public isLoading = signal<boolean>(false);

  // متد جستجو
  public onSearch(event: { query: string }): void {
    const query = event.query?.trim() || '';

    // اگر کمتر از حداقل کاراکتر باشه، چیزی نشون نده
    if (query.length < this.minLength()) {
      this.searchEvent.emit('');
      return;
    }

    // ارسال رویداد جستجو به والد
    this.isLoading.set(true);
    this.searchEvent.emit(query);

    // بعد از دریافت نتیجه، loading رو false کن
    // این کار در والد انجام میشه
  }

  // وقتی آیتمی انتخاب شد
  public onSelect(event: AutoCompleteSelectEvent): void {
    // ✅ event.value رو استخراج کن
    const selectedValue = event.value as T;

    this.value.set(selectedValue);
    this.changeValue.emit(selectedValue);
    this.selectedItem.emit(selectedValue);
  }

  // وقتی مقدار پاک شد
  public onClear(): void {
    this.value.set(null);
    this.changeValue.emit(null);
  }
}
