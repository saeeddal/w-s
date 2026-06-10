import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterOutlet,
} from '@angular/router';
import { AppFacade } from '@app/core/app/app.facade';
import { AuthFacade } from '@app/core/auth/auth.facade';

@Component({
  selector: 'app-general-layout',
  templateUrl: './general-layout.component.html',
  styleUrl: './general-layout.component.scss',
  imports: [RouterOutlet, CommonModule],
})
export class GeneralLayout {
  public readonly APP_FACADE = inject(AppFacade);
  public readonly AUTH_FACADE = inject(AuthFacade);

  constructor() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.appFacade.setLoading(true);
      }

      if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.appFacade.setLoading(false);
      }
    });
  }
  private readonly router = inject(Router);
  private readonly appFacade = inject(AppFacade);
}
