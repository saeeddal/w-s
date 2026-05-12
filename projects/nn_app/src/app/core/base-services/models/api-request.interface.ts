import type { HttpMethod } from './http-method.enum';

export interface IApiRequest<TBody = unknown> {
  method: HttpMethod;
  endpoint: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params?: Record<string, any>;
  body?: TBody;
}
