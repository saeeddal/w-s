import { Injectable } from '@angular/core';
import type { IIdTitle } from '@app/shared/models/common/common.interface';

@Injectable({
  providedIn: 'root',
})
export class CenterRepository {
  public saveSelectedCenter(selectedCenter: IIdTitle) {
    localStorage.setItem('selectedCenter', JSON.stringify(selectedCenter));
  }

  public getSelectedCenter() {
    return localStorage.getItem('selectedCenter');
  }
}
