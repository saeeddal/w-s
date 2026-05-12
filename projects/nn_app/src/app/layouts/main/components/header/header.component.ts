import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  EventEmitter,
  inject,
  input,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CONST_CONFIG } from '@app/settings/const-config/const-config.setting';
import { AppFacade } from '@app/core/app.facade';
import { UserRule } from '@app/shared/models/common/enums';
type Button = {
  name: string;
  icon: string;
  iconFilled: string;
  slug: string;
};
@Component({
  selector: 'bmn-header',
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './header.component.scss',
})
export class BmnHeaderComponent {
  public headerTitle = input('');

  public showBack = input(false);

  public hideLoginButton = input(false);

  public readonly GO_PREVIOUS_ROUTE = new EventEmitter();

  public readonly APP_FECAD = inject(AppFacade);
  public headerHeight = CONST_CONFIG.appSetting.header.headerHeight;

  public buttons: Button[] = [
    {
      name: 'سازمان‌ها و کاربران',
      icon: '',
      iconFilled: '',
      slug: 'organs',
    },
    {
      name: 'دوره‌ها',
      icon: '',
      iconFilled: '',
      slug: 'loans',
    },
  ];

  public buttonsForUser = computed(() => {
    switch (this.APP_FECAD.userRoule()) {
      case UserRule.EXPERT:
        return this.buttons.filter((x) => x.slug === 'requests' || x.slug === 'createRequest');
      case UserRule.MANAGER:
        return this.buttons.filter(
          (x) => x.slug === 'loans' || x.slug === 'createLoan' || x.slug === 'bankFeadback'
        );

      case UserRule.SETAD:
        return this.buttons.filter(
          (x) => x.slug === 'loans' || x.slug === 'createLoan' || x.slug === 'bankFeadback'
        );

      default:
        return this.buttons.filter((x) => x.slug === 'loagout');
    }
  });

  public goBack(): void {
    this.GO_PREVIOUS_ROUTE.emit();
  }
}
