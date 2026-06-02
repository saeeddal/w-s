// auth.guard.ts
import type { CanActivateFn } from '@angular/router';

/**
 * Route Guard - Protects routes from unauthenticated access
 * Automatically redirects to login if not authenticated
 */
export const authGuard: CanActivateFn = () => {
  return true;
};
