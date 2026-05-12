export interface IApiResponse<T> {
  data: T | null;
  message?: string;
  success: boolean;
}

export class DefaultApiResponse<T> implements IApiResponse<T> {
  public data = null;
  public message = 'نامشخص ';
  public success = false;
}
