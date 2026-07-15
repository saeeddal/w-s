export enum ApiEndpoint {
  Users = 'users',
  Products = 'products',
  Orders = 'orders',
}

import type { HttpHeaders, HttpParams } from '@angular/common/http';

export interface IApiRequestModel<TBody = unknown, TParams = Record<string, unknown>> {
  endpoint: string;
  body?: TBody;
  params?: TParams | HttpParams;
  headers?: HttpHeaders | Record<string, string | string[]>;
  reportProgress?: boolean;
  withCredentials?: boolean;
}

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

export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}
