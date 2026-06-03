import { inject } from '@angular/core';
import type { CanActivateFn } from '@angular/router';
import { AuthFacade } from '../auth/auth.facade';

export const authGuard: CanActivateFn = () => {
  const authFacade = inject(AuthFacade);

  if (authFacade.isAuthenticated()) {
    return true;
  }

  authFacade.login();

  return false;
};
