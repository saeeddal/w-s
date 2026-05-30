export enum PtDividerBgColor {
  GRADE_1 = 'GRADE-1',
  GRADE_2 = 'GRADE-2',
  HIGH_EMPHASIS = 'HIGH-EMPHASIS',
  LOW_EMPHASIS = 'LOW-EMPHASIS',
}
export type DividerBgColor = `${PtDividerBgColor}`;

export enum PtDividerSize {
  PX_1 = 'PX-1',
  PX_2 = 'PX-2',
}
export type DividerSize = `${PtDividerSize}`;

export enum PtDividerMargin {
  NONE = 'NONE',
  M_4 = 'M-4',
  M_8 = 'M-8',
  M_16 = 'M-16',
}
export type DividerMargin = `${PtDividerMargin}`;

export enum PtDividerDisplay {
  HORIZONTAL = 'HORIZONTAL',
  VERTICAL = 'VERTICAL',
}
export type DividerDisplay = `${PtDividerDisplay}`;
