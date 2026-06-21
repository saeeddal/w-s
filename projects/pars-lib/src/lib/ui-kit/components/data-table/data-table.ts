import type { OnInit } from '@angular/core';
import { Component, computed, input, output, signal, model } from '@angular/core';
import { TableModule } from 'primeng/table';
import { SkeletonModule } from 'primeng/skeleton';
import { PaginatorModule } from 'primeng/paginator';
import { ButtonModule } from 'primeng/button';
import { MultiSelectModule } from 'primeng/multiselect';
import { TooltipModule } from 'primeng/tooltip';

import type { IColumn } from '../../definitions/dataTable-models';
import type { PaginatorState } from 'primeng/paginator';
import { FormsModule } from '@angular/forms';
import type { DataTableSelectionType } from './_/datatable.type';
import { PtDataTableSelectionType } from './_/datatable.type';

@Component({
  selector: 'pt-data-table',
  templateUrl: './data-table.html',
  styleUrl: './data-table.scss',
  standalone: true,
  imports: [
    TableModule,
    SkeletonModule,
    PaginatorModule,
    ButtonModule,
    MultiSelectModule,
    TooltipModule,
    FormsModule,
  ],
})
export class PtDataTable<T extends { id: number | string }> implements OnInit {
  // ==================== Inputs ====================
  public items = input<T[]>([]);
  public customizeColumn = input<boolean>(true);
  public cols = model<IColumn[]>([]); // Changed to model (two-way)
  public isLoading = input<boolean>(false);
  public totalRecords = input<number>(0);
  public rows = input<number>(10);
  public rowsPerPageOptions = input<number[]>([5, 10, 20, 50]);
  public selectionMode = input<DataTableSelectionType>(PtDataTableSelectionType.NONE);
  public dataKey = input<string>('id');
  public showPaginator = input<boolean>(true);
  public dataTableSelectionType = PtDataTableSelectionType;
  // ==================== Outputs ====================
  public pageChanged = output<{ first: number; rows: number; page: number }>();
  public selectionChanged = output<T | T[] | null>();

  // ==================== State ====================
  public first = signal<number>(0);
  public selectedItems: T | T[] | null = null;

  // Visible columns for toggle
  public visibleCols = signal<IColumn[]>([]);

  // ==================== Computed ====================
  public filterItems = computed(() =>
    this.visibleCols()
      .filter((col) => col.filterable && !!col.field)
      .map((col) => col.field!),
  );

  public displaySkeletonData = computed(() => {
    if (this.isLoading()) {
      return Array.from({ length: this.rows() }, (_, i) => ({
        id: `skeleton-${i}`,
      })) as T[];
    }
    return this.items();
  });

  public primeSelectionMode = computed(() => {
    const mode = this.selectionMode();
    return mode === 'none' ? null : mode;
  });

  // ==================== Methods ====================
  ngOnInit() {
    this.visibleCols.set([...this.cols()]);
  }

  public onSelectionChange(): void {
    this.selectionChanged.emit(this.selectedItems);
  }

  public onPageChange(event: PaginatorState): void {
    this.first.set(event.first ?? 0);
    this.pageChanged.emit({
      first: event.first ?? 0,
      rows: event.rows ?? this.rows(),
      page: event.page ?? 0,
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public onColReorder(event: any): void {
    if (event?.dragIndex === event?.dropIndex) {
      return;
    }

    const current = [...this.visibleCols()];
    const moved = current.splice(event.dragIndex, 1)[0];
    current.splice(event.dropIndex, 0, moved);

    this.visibleCols.set(current);
    //this.cols.set(current); // Update parent
  }

  public onVisibleColumnsChange(event: IColumn[]): void {
    this.visibleCols.set(event);
  }
}
