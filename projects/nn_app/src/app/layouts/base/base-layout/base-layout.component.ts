import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CONST_CONFIG } from '@app/settings/const-config/const-config.setting';

@Component({
  selector: 'app-narrow-layout',
  imports: [RouterOutlet],
  templateUrl: './base-layout.component.html',
  styleUrl: './base-layout.component.scss',
})
export class BmnBaseLayoutComponent {
  public maxDesktopWidth = CONST_CONFIG.common.maxDesktopWidth;
}
