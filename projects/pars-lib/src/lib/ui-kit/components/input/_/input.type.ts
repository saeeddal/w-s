export enum PtInputType {
  NUMBER = 'NUMBER',
  TEXT = 'TEXT',
}
export type InputType = `${PtInputType}`;

export enum PtInputBorderColor {
  TRANSPARENT = 'TRANSPARENT',
  GRADE_1 = 'GRADE-1',
  GRADE_2 = 'GRADE-2',
  REFERENCE_PRIMARY_MAIN = 'REFERENCE-PRIMARY-MAIN',
  CONTENT_ERROR = 'CONTENT-ERROR',
}
export type InputBorderColor = `${PtInputBorderColor}`;

export enum PtInputNumeric {
  DEFAULT = 'DEFAULT',
  PERSIAN = 'PERSIAN',
}
export type InputNumeric = `${PtInputNumeric}`;
