import { HttpClient, HttpHeaders } from '@angular/common/http';
import type { WritableSignal } from '@angular/core';
import { inject, Injectable, signal } from '@angular/core';
import type { Observable } from 'rxjs';
import type { IApiRequestModel } from './models';

@Injectable({ providedIn: 'root' })
export class ApiHttpService {
  public isLoading = signal(false);
  public lastError: WritableSignal<unknown> = signal(null);

  public post$<TResponse = unknown>(req: IApiRequestModel): Observable<TResponse> {
    const url = this.getUrl(req.endpoint);

    return this.HTTP.post<TResponse>(url, req.body, {
      headers: req.headers,
      reportProgress: req.reportProgress,
      withCredentials: req.withCredentials,
      responseType: 'json' as const,
    }).pipe();
  }

  private readonly HTTP = inject(HttpClient);
  private readonly BASE_URL = 'https://jsonplaceholder.typicode.com/';

  private getUrl(endpoint: string): string {
    if (endpoint.startsWith('https')) {
      return endpoint;
    }
    return `${this.BASE_URL.replace(/\/$/, '')}/${endpoint.replace(/^\//, '')}`;
  }

  private withAuthHeaders(token: string | null): HttpHeaders {
    return new HttpHeaders({
      authorization: token ? `Bearer ${token}` : '',
    });
  }
}
