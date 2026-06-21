import type { IColumn } from '@pars-lib/lib/ui-kit/definitions/dataTable-models';

export const MockDataTable = [
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

export interface Product {
  id: number;
  code?: string;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  inventoryStatus?: string;
  category?: string;
  image?: string;
  rating?: number;
}

export const MockCols: IColumn[] = [
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
