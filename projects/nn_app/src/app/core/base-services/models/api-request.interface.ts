import type { HttpHeaders, HttpParams } from '@angular/common/http';

export interface IApiRequestModel<TBody = unknown, TParams = Record<string, unknown>> {
  endpoint: string;
  body?: TBody;
  params?: TParams | HttpParams;
  headers?: HttpHeaders | Record<string, string | string[]>;
  reportProgress?: boolean;
  withCredentials?: boolean;
}
