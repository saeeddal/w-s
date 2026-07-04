/* eslint-disable no-console */
import { Component, signal } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import type { IColumn } from '../../../../../../public-api';
import { PtDataTable, UK_TYPE } from '../../../../../../public-api';

@Component({
  selector: 'pt-show-case-datatable',
  imports: [ReactiveFormsModule, FormsModule, PtDataTable],
  templateUrl: './show-case-datatable.html',
  styleUrl: './show-case-datatable.scss',
})
export class PtShowCaseDatatable {
  public readonly UK_TYPE = UK_TYPE;

  public isLoading = signal<boolean>(false);
  public totalItems = signal<number>(6);
  public currentPage = signal<number>(0);
  public pageSize = signal<number>(5);
  public firstIndex = signal<number>(0);

  mockDataTable = [
    {
      id: 1000,
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5,
    },
    {
      id: 1001,
      code: 'nvklal433',
      name: 'Black Watch',
      description: 'Product Description',
      image: 'black-watch.jpg',
      price: 72,
      category: 'Accessories',
      quantity: 61,
      inventoryStatus: 'OUTOFSTOCK',
      rating: 4,
    },
    {
      id: 1002,
      code: 'zz21cz3c1',
      name: 'Blue Band',
      description: 'Product Description',
      image: 'blue-band.jpg',
      price: 79,
      category: 'Fitness',
      quantity: 2,
      inventoryStatus: 'LOWSTOCK',
      rating: 3,
    },
    {
      id: 1003,
      code: '244wgerg2',
      name: 'Blue T-Shirt',
      description: 'Product Description',
      image: 'blue-t-shirt.jpg',
      price: 29,
      category: 'Clothing',
      quantity: 25,
      inventoryStatus: 'INSTOCK',
      rating: 5,
    },
    {
      id: 1004,
      code: 'h456wer53',
      name: 'Bracelet',
      description: 'Product Description',
      image: 'bracelet.jpg',
      price: 15,
      category: 'Accessories',
      quantity: 73,
      inventoryStatus: 'INSTOCK',
      rating: 4,
    },
    {
      id: 1005,
      code: '55555',
      name: 'Bracelet',
      description: 'Product Description',
      image: 'bracelet.jpg',
      price: 15,
      category: 'Accessories',
      quantity: 73,
      inventoryStatus: 'INSTOCK',
      rating: 5,
    },
  ];

  public mockData = this.mockDataTable.slice(this.currentPage(), this.pageSize());

  mockCols: IColumn[] = [
    { field: 'code', header: 'Code', sortable: true },
    { field: 'name', header: 'Name', filterable: true, filterType: 'text' },
    {
      field: 'category',
      header: 'Category',
      filterable: true,
      filterType: 'multiselect',
      options: ['opt1', 'opt2', 'opt3'],
    },
    { field: 'quantity', header: 'Quantity', sortable: true, filterable: true, filterType: 'text' },
  ];

  mockColsWithoutFilterAndSort: IColumn[] = [
    { field: 'code', header: 'Code' },
    { field: 'name', header: 'Name' },
    {
      field: 'category',
      header: 'Category',
    },
    { field: 'quantity', header: 'Quantity' },
  ];
  public onPageChanged(event: { page: number; rows: number; first: number }) {
    if (event.page === undefined || event.rows === undefined || event.first === undefined) {
      return;
    }
    this.isLoading.set(true);

    if (!event) {
      this.isLoading.set(false);
      return;
    }

    const sorted = [...this.mockDataTable].sort((a, b) => a.id - b.id);

    const start = event.page * event.rows;
    const end = start + event.rows;

    this.mockData = sorted.slice(start, end);

    this.isLoading.set(false);
    // Handle row selection
  }
  public onSelectionChanged(data: unknown | unknown[] | null): void {
    console.warn('Selected product:', data);
  }
}
