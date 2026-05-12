export interface BmnResponse<T> {
  data: T;
  code: number;
  message: string;
}
