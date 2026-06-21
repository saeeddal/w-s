import { Component, computed, input, output, signal } from '@angular/core';
import { TableModule } from 'primeng/table';
import { SkeletonModule } from 'primeng/skeleton';
import type { IColumn } from '../../definitions/dataTable-models';
import type { PaginatorState } from 'primeng/paginator';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'pt-data-table',
  templateUrl: './data-table.html',
  standalone: true,
  imports: [TableModule, SkeletonModule, PaginatorModule],
})
export class PtDataTable<T extends { id: number | string }> {
  // Inputs
  public items = input<T[]>([]);
  public cols = input<IColumn[]>([]);
  public isLoading = input<boolean>(false);
  public totalRecords = input<number>(0);
  public rowsPerPageOptions = input<number[]>([5, 10, 20, 50]);
  public rows = input<number>(5);
  public selectionMode = input<'single' | 'multiple' | null | undefined>(null);
  public dataKey = input<string>('id');
  public showPaginator = input<boolean>(true);

  // Outputs
  public pageChanged = output<{ first: number; rows: number; page: number }>();
  public selectionChanged = output<T | T[] | null>();

  // State
  public first = signal<number>(0);
  public selectedItems: T | T[] | null = null;
  public metaKey: boolean = true;

  // Computed values
  public filterItems = computed(
    () =>
      this.cols()
        .filter((x) => x.filterable)
        .map((f) => f.field) || [],
  );

  public displaySkeletonData = computed(() => {
    if (this.isLoading()) {
      return Array.from({ length: this.rows() }).map((_, i) => ({ id: `skeleton-${i}` })) as T[];
    }
    return this.items();
  });

  public onSelectionChange(): void {
    // This will now get the updated value
    this.selectionChanged.emit(this.selectedItems);
  }

  public onPageChange(event_params: PaginatorState) {
    const event = {
      first: event_params.first ?? 0,
      rows: event_params.rows ?? 10,
      page: event_params.page ?? 0,
    };
    this.pageChanged.emit(event);
  }
}
