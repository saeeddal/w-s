/* eslint-disable @typescript-eslint/no-explicit-any */
// core/services/api-http.service.ts
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import type { WritableSignal } from '@angular/core';
import { inject, Injectable, signal } from '@angular/core';
import type { Observable } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import type { IApiRequestModel } from './models';

@Injectable({ providedIn: 'root' })
export class ApiHttpService {
  public isLoading = signal(false);
  public lastError: WritableSignal<unknown> = signal(null);

  /**
   * POST request with success message control
   * @param req - API request model
   * @param options.showSuccess - Control success message display (default: false)
   * Note: Error messages are ALWAYS shown
   */
  public post$<TResponse = unknown>(
    req: IApiRequestModel,
    options?: { showSuccess?: boolean },
  ): Observable<TResponse> {
    const url = this.getUrl(req.endpoint);
    this.isLoading.set(true);

    // Add headers
    let headers = this.prepareHeaders(req.headers, options?.showSuccess);

    return this.HTTP.post<TResponse>(url, req.body, {
      headers: headers,
      params: req.params as any,
      reportProgress: req.reportProgress,
      withCredentials: req.withCredentials,
      responseType: 'json',
    }).pipe(
      finalize(() => {
        this.isLoading.set(false);
      }),
      catchError((error) => {
        this.lastError.set(error);
        throw error;
      }),
    );
  }

  /**
   * GET request with success message control
   * @param req - API request model (body will be ignored for GET)
   * @param options.showSuccess - Control success message display (default: false)
   * Note: Error messages are ALWAYS shown
   */
  public get$<TResponse = unknown>(
    req: IApiRequestModel,
    options?: { showSuccess?: boolean },
  ): Observable<TResponse> {
    const url = this.getUrl(req.endpoint);
    this.isLoading.set(true);

    // Add headers
    let headers = this.prepareHeaders(req.headers, options?.showSuccess);

    // Convert params to HttpParams if it's a plain object
    let params = req.params;
    if (params && typeof params === 'object' && !(params instanceof HttpParams)) {
      let httpParams = new HttpParams();
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          httpParams = httpParams.set(key, String(value));
        }
      });
      params = httpParams;
    }

    return this.HTTP.get<TResponse>(url, {
      headers: headers,
      params: params as any,
      reportProgress: req.reportProgress,
      withCredentials: req.withCredentials,
      responseType: 'json',
    }).pipe(
      finalize(() => {
        this.isLoading.set(false);
      }),
      catchError((error) => {
        this.lastError.set(error);
        throw error;
      }),
    );
  }

  private readonly HTTP = inject(HttpClient);
  private readonly BASE_URL = 'https://jsonplaceholder.typicode.com/';

  /**
   * Prepare headers with success message control
   */
  private prepareHeaders(
    headers?: HttpHeaders | Record<string, string | string[]>,
    showSuccess?: boolean,
  ): HttpHeaders {
    let finalHeaders = headers instanceof HttpHeaders ? headers : new HttpHeaders(headers || {});

    // Only show success if explicitly requested
    finalHeaders = finalHeaders.set('X-Show-Success', showSuccess ? 'true' : 'false');

    return finalHeaders;
  }

  private getUrl(endpoint: string): string {
    if (endpoint.startsWith('https')) {
      return endpoint;
    }
    return `${this.BASE_URL.replace(/\/$/, '')}/${endpoint.replace(/^\//, '')}`;
  }
}
