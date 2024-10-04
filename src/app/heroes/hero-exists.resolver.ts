import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, Router } from '@angular/router';

export const heroExistsResolver: ResolveFn<Object> = (snapshot: ActivatedRouteSnapshot) => {
  const heroId = snapshot.params['id'];
  const router = inject(Router);
  
  if (heroId === '1') {
    return true;
  }
  
  router.navigate(['/not-found'], { skipLocationChange: true });
  return false;
}