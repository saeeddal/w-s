import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { CenterFacade } from '@app/features/centers/centers.facade';

export const selectCenterGuard: CanActivateFn = () => {
  const authFacade = inject(CenterFacade);
  const router = inject(Router);

  if (authFacade.selectedCenter()) {
    return true;
  }

  router.navigate(['/auth/select-center']);

  return false;
};
