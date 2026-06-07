import type { HttpInterceptorFn } from '@angular/common/http';
import { AUTH_CONFIG } from '../auth/auth.const';

export const getTokenInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url === AUTH_CONFIG.tokenUrl) {
    return next(
      req.clone({
        setHeaders: {
          Authorization: `Basic ${getBasicToken()}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }),
    );
  } else {
    return next(req);
  }

  function getBasicToken(): string {
    return btoa(`${AUTH_CONFIG.clientId}:${AUTH_CONFIG.clientSecret}`);
  }
};
