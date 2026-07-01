export interface IColumn {
  field: string;
  header: string;
  sortable?: boolean | null;
  filterable?: boolean;
  filterType?: 'text' | 'boolean' | 'select' | 'multiselect';
  matchMode?: string;

  options?: unknown[]; // for select/multiselect
}
