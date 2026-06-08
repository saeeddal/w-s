import { Injectable } from '@angular/core';
import type { ICenterInfo } from '@app/shared/models/dto/center/center-info.interface';

@Injectable({
  providedIn: 'root',
})
export class CenterRepository {
  public saveSelectedCenter(selectedCenter: ICenterInfo) {
    localStorage.setItem('selectedCenter', JSON.stringify(selectedCenter));
  }

  public getSelectedCenter() {
    return localStorage.getItem('selectedCenter');
  }
}
