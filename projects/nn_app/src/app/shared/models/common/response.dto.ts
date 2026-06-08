export interface IResponse<T> {
  developMode: boolean;
  Status: number;

  message: {
    data: T;
    total: number;
  };
}
