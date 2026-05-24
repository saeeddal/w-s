import type { HttpParams } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import type { WritableSignal } from '@angular/core';
import { inject, Injectable, signal } from '@angular/core';
import type { Observable } from 'rxjs';

// Your existing interfaces
export interface IApiRequest<TBody = unknown, TParams = Record<string, unknown>> {
  endpoint: string;
  body?: TBody;
  params?: TParams | HttpParams;
  headers?: HttpHeaders | Record<string, string | string[]>;
  reportProgress?: boolean;
  withCredentials?: boolean;
}

@Injectable({ providedIn: 'root' })
export class ApiHttpService {
  public isLoading = signal(false);
  public lastError: WritableSignal<unknown> = signal(null);

  public post$<TResponse = unknown>(req: IApiRequest): Observable<TResponse> {
    const url = this.getUrl(req.endpoint);

    // You can also set loading here if you want global signal,
    // but in feature stores it's usually better to manage per-feature
    // this.isLoading.set(true);

    return this.HTTP.post<TResponse>(url, req.body, {
      headers: req.headers,
      reportProgress: req.reportProgress,
      withCredentials: req.withCredentials,
      responseType: 'json' as const,
    })
      .pipe
      // optional: finalize(() => this.isLoading.set(false))  // if global loading
      // optional: catchError(err => { this.lastError.set(err); throw err; })
      ();
  }

  private readonly HTTP = inject(HttpClient);
  private readonly BASE_URL = 'https://jsonplaceholder.typicode.com/';

  // ← NEW: Observable version – perfect for rxMethod / switchMap

  private getUrl(endpoint: string): string {
    return `${this.BASE_URL.replace(/\/$/, '')}/${endpoint.replace(/^\//, '')}`;
  }

  private withAuthHeaders(token: string | null): HttpHeaders {
    return new HttpHeaders({
      authorization: token ? `Bearer ${token}` : '',
    });
  }
}
