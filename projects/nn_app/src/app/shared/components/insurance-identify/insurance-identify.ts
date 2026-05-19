import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PtBasicCard, PtKeyVal, PtLabel, UK_TYPE } from '../../../../../../pars-lib/src/public-api';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'insurance-identify',
  imports: [CommonModule, FormsModule, RouterModule, PtLabel, PtKeyVal, PtBasicCard],
  templateUrl: './insurance-identify.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './insurance-identify.scss',
})
export class InsuranceIdendify {
  public readonly UK_TYPE = UK_TYPE;
  public title = input('نامشخص');
  public details = input<Record<string, string>>({
    نام: 'saeed',
    خانوادگی: 'dalvand',
    موبایل: '09108582385',
    sasa: '09108582385',
    موباdssdsیل: '09108582385',
    dsfsfsdfs: '09108582385',
    موبfdfdgdgdgایل: '09108582385',
    موبddggایل: '09108582385',
    kljkjk: '09108582385',
    موبایjkjereل: '09108582385',
  });
}
