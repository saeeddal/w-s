export enum PtPersianDateFormat {
  DATE_SLASH = 'yyyy/MM/dd',
  DATE_DASH = 'yyyy-MM-dd',
  DATE_TIME_SLASH = 'yyyy/MM/dd HH:mm',
  DATE_TIME_DASH = 'yyyy-MM-dd HH:mm',
}
export type PersianDateFormat = `${PtPersianDateFormat}`;

export enum PtCalenderType {
  JALALI = 'jalali',
  GREGORIAN = 'gregorian',
}

export type CalenderType = `${PtCalenderType}`;
