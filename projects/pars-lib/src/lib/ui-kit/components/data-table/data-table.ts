/* eslint-disable @typescript-eslint/member-ordering */
import { Component, computed, input, output, signal } from '@angular/core';
import type { TablePageEvent } from 'primeng/table';
import { TableModule } from 'primeng/table';
import type { Product } from './_/mock_data';
import { MockCols, mockDataTable } from './_/mock_data';
import { SkeletonModule } from 'primeng/skeleton';
interface Column {
  field: string;
  header: string;
  sortable?: boolean | null;
  filterable?: boolean;
}

type RowsPerPage = 5 | 10 | 20;

@Component({
  selector: 'pt-data-table',
  templateUrl: './data-table.html',
  standalone: true,
  imports: [TableModule, SkeletonModule],
})
export class PtDataTable {
  public products = input<Product[]>(mockDataTable || this.getRecordsToShowInLoadingMode());
  public cols = input<Column[]>(MockCols);
  public isLoading = input<boolean>(false);
  public hasPagination = input<boolean>(true);
  public rowsPerPageOptions = input<RowsPerPage[]>([5, 10, 20]);
  public rows = input<RowsPerPage>(5);
  public first = signal<number>(0);

  public filterItems = computed(
    () =>
      this.cols()
        .filter((x) => x.filterable)
        .map((f) => f.field) || [],
  );

  public pageChanged = output<TablePageEvent>();

  public next() {
    this.first.set(this.first() + this.rows());
  }

  public prev() {
    this.first.set(this.first() - this.rows());
  }

  public reset() {
    this.first.set(0);
  }

  public pageChange(event: TablePageEvent) {
    this.first.set(event.first);
    this.pageChanged.emit(event);
  }

  public isLastPage(): boolean {
    return this.products() ? this.first() + this.rows() >= this.products().length : true;
  }

  public isFirstPage(): boolean {
    return this.products() ? this.first() === 0 : true;
  }

  // for show skeleton
  private getRecordsToShowInLoadingMode() {
    if (this.isLoading()) {
      return Array.from({ length: 5 }).map((_, i) => ({ id: i.toString() }));
    }
    return [];
  }
}
