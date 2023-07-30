import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { FirstComponent } from '../components/first/first.component';
import { FirstService } from '../services/first.service';

export const AdminGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
  ) => {
    const firstComp = inject(FirstService);
    const router = inject(Router);
    console.log('Active guard statrd');
    if (firstComp.isAdmin) {
      console.log('Active guard worked');
      router.navigate(['home']);
      return true;
    }
    return false;
}