import type { AfterViewInit } from '@angular/core';
import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppFacade } from '@app/core/app.facade';
import { AuthFacade } from '@app/core/auth/auth.facade';

@Component({
  selector: 'app-call-back',
  imports: [],
  templateUrl: './call-back.html',
  styleUrl: './call-back.scss',
})
export class CallBack implements AfterViewInit {
  public notSend = signal(false);
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
          this.APP_FACADE.checkLogin();
        }
      }
    }, 500);
  }

  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly APP_FACADE = inject(AppFacade);
  private readonly AUTH_FACADE = inject(AuthFacade);
}
