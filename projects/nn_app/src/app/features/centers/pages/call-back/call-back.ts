import type { AfterViewInit } from '@angular/core';
import { Component, effect, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppFacade } from '@app/core/app/app.facade';
import { AuthFacade } from '@app/core/auth/auth.facade';

@Component({
  selector: 'app-call-back',
  imports: [],
  templateUrl: './call-back.html',
  styleUrl: './call-back.scss',
})
export class CallBack implements AfterViewInit {
  notSend = signal(false);
  public readonly AUTH_FACADE = inject(AuthFacade);
  public readonly APP_FACADE = inject(AppFacade);
  constructor() {
    effect(() => {
      const token = this.AUTH_FACADE.accessToken();
      if (token) {
        this.AUTH_FACADE.getUser();
        this.AUTH_FACADE.getMenuList();
      }
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.AUTH_FACADE.isAuthenticated()) {
        this.router.navigate(['/auth/select-center']);
      } else {
        const code = this.route.snapshot.queryParamMap.get('code');
        if (code && !this.notSend()) {
          this.notSend.set(true);
          this.AUTH_FACADE.exchangeCodeForToken(code);
        } else if (!code && !this.notSend()) {
          this.AUTH_FACADE.login();
        }
      }
    }, 100);
  }

  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
}
