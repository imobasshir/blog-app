import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { FirstComponent } from '../components/first/first.component';
import { FirstService } from '../services/first.service';

export const AdminGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
  ) => {
    const firstComp = inject(FirstService);
    console.log('Active guard statrd');
    if (firstComp.isAdmin) {
      console.log('Active guard worked');
      
      return true;
    }
    return false;
}