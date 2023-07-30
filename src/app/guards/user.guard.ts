import { inject } from '@angular/core';
import { CanDeactivateFn } from '@angular/router';
import { BlogComponent } from '../components/blog/blog.component';
import { FirstComponent } from '../components/first/first.component';
import { FirstService } from '../services/first.service';

export const UserGuard: CanDeactivateFn<BlogComponent> = (
    component: BlogComponent
) => {
    const first = inject(FirstService);
    if (!first.isAdmin) {
        return true;
    } else {
        return false;
    }
}