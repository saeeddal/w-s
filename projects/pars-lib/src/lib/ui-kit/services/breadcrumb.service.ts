import { inject, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import type { IBreadcrumbItem } from '../definitions';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  private breadcrumbsSubject = new BehaviorSubject<IBreadcrumbItem[]>([]);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  // eslint-disable-next-line @typescript-eslint/member-ordering
  public breadcrumbs$ = this.breadcrumbsSubject.asObservable();

  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      const breadcrumbs = this.buildBreadcrumbs(this.route.root);

      this.breadcrumbsSubject.next(breadcrumbs);
    });
  }

  private buildBreadcrumbs(
    route: ActivatedRoute,
    url: string = '',
    breadcrumbs: IBreadcrumbItem[] = [],
  ): IBreadcrumbItem[] {
    const children = route.children;

    for (const child of children) {
      const routeUrl = child.snapshot.url.map((segment) => segment.path).join('/');

      const nextUrl = routeUrl ? `${url}/${routeUrl}` : url;

      const label = child.snapshot.data['breadcrumb'];

      if (label) {
        const exists = breadcrumbs.some((b) => b.url === nextUrl && b.label === label);

        if (!exists) {
          breadcrumbs.push({
            label,
            url: nextUrl,
          });
        }
      }

      this.buildBreadcrumbs(child, nextUrl, breadcrumbs);
    }

    return breadcrumbs;
  }
}
