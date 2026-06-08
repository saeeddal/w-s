import type { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthFacade } from '../auth/auth.facade';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const AUTH_FACADE = inject(AuthFacade);
  const token = AUTH_FACADE.accessToken();
  if (!token) {
    return next(req);
  }
  return next(
    req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    }),
  );
};
