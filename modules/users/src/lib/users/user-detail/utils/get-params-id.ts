import { inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

export function getParamsId(): Observable<string> {
  const activatedRoute = inject(ActivatedRoute);
  // usaremos pipe para usar o rxjs ao invés de ficar metendo subscribes
  return activatedRoute.params.pipe(map((params) => params['id']));
}
