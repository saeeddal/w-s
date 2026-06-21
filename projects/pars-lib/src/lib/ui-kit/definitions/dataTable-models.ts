export interface IColumn {
  field: string;
  header: string;
  sortable?: boolean | null;
  filterable?: boolean;
  filterType?: 'text' | 'boolean' | 'select' | 'multiselect';
  matchMode?: string;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options?: any[]; // for select/multiselect
}
