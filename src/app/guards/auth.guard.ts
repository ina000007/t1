import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);
  const router = inject(Router);
  console.log("Is User Logged In: "+ authService.isAuthenticatedUser());

  let isAuthenticated = authService.isAuthenticatedUser();

  if(!isAuthenticated)
  {
    router.navigateByUrl('/login');
  }

  return isAuthenticated;
};
